import React, { useState } from 'react';
import { FileUploadState, Supplier, SupplierFile } from '../models/Supplier';
import LoadingButton from '../components/layout/LoadingButton';

const ProductStockUpdatesPage: React.FC = () => {
  const [lookupState, setLookupState] = useState<FileUploadState>(FileUploadState.NotUploaded);
  const [gammatekState, setGammatekState] = useState<FileUploadState>(FileUploadState.NotUploaded);
  const [apexState, setApexState] = useState<FileUploadState>(FileUploadState.NotUploaded);
  const [solarpopState, setSolarpopState] = useState<FileUploadState>(FileUploadState.NotUploaded);
  const [brickupState, setBrickupState] = useState<FileUploadState>(FileUploadState.NotUploaded);
  const [files, setFiles] = useState<SupplierFile[]>([]);
  const [uploadBtnDisabled, setUploadBtnDisabled] = useState(true);
  const [fileInputsDisabled, setFileInputsDisabled] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleFileChange = (supplier: Supplier) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const eventFiles = event.target.files;
    if (!eventFiles || eventFiles.length === 0) return;
    if (eventFiles.length > 1) {
      alert('Only one file can be uploaded at a time');
      return;
    }

    setFiles([...files, { Supplier: supplier, File: eventFiles![0] }]);

    setUploadBtnDisabled(false);
  };

  const handleDeleteClick = (supplier: Supplier) => () => {
    clearFileInput(supplier);
    setFiles(files.filter((file) => file.Supplier !== supplier));
    if (files.length < 1) setUploadBtnDisabled(true);
    setFileUploadState(supplier, FileUploadState.NotUploaded);
  }

  const setFileUploadState = (supplier: Supplier, state: FileUploadState) => {
    switch (supplier) {
      case Supplier.Lookup:
        setLookupState(state);
        break;
      case Supplier.Gammatek:
        setGammatekState(state);
        break;
      case Supplier.Apex:
        setApexState(state);
        break;
      case Supplier.Solarpop:
        setSolarpopState(state);
        break;
      case Supplier.Brickup:
        setBrickupState(state);
        break;
    }
  };

  const getIconByState = (state?: FileUploadState) => {
    switch (state) {
      case FileUploadState.Uploading:
        return <span className='rotate-cubic-bezier'>⏳</span>;
      case FileUploadState.Uploaded:
        return <span className="text-success">✔</span>;
      case FileUploadState.Failed:
        return <span>❌</span>;
      default:
        return '';
    }
  };

  const handleUploadClick = () => {
    setIsUploading(true);
    setUploadBtnDisabled(true);
    setFileInputsDisabled(true);

    files.forEach((file) => {
      setFileUploadState(file.Supplier, FileUploadState.Uploading);

      const formData = new FormData();
      formData.append('supplier', file.Supplier);
      formData.append('file', file.File);

      fetch('http://localhost:5000/api/fileupload', {
        method: 'POST',
        body: formData,
      }).then(() => {
        setFileUploadState(file.Supplier, FileUploadState.Uploaded);
        clearFileInput(file.Supplier, FileUploadState.Uploaded);
        // remove uploaded file from files array
        setFiles(files.filter((f) => f.Supplier !== file.Supplier));
      }).catch((error) => {
        setFileUploadState(file.Supplier, FileUploadState.Failed);
        console.error(error);
      });
    });
  };

  const handleBooksiteDownloadClick = () => {
    setIsDownloading(true);
    fetch('http://localhost:5000/api/fileupload/booksite', {
      method: 'GET',
    }).then((response) => {
      if (response.ok) {
        response.blob().then((blob) => {
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          const contentDisposition = response.headers.get('Content-Disposition');
          const filename = contentDisposition?.split('filename=')[1];
          a.download = filename || 'itemmast.txt';
          a.click();
          window.URL.revokeObjectURL(url);
        });
      }
    }).catch((error) => {
      console.error(error);
    })
    .finally(() => setIsDownloading(false));
  }

  const clearFileInput = (supplier: Supplier, uploadState: FileUploadState = FileUploadState.NotUploaded) => {
    const inputElement = document.getElementById(supplier.toLowerCase()) as HTMLInputElement;
    inputElement.value = '';
    setFileUploadState(supplier, uploadState);
  }

  return (
    <div>
      <h1>Product Stock Updates</h1>

      <div className="container form">
        <div className="row mt-4">
          <div className="col-6">
            <label htmlFor="lookup" className="form-label">Upload Lookup File (skus_and_ids.csv)</label>
            <div className="d-flex align-items-center">
              <input className="form-control" type="file" disabled={fileInputsDisabled} id="lookup" onChange={handleFileChange(Supplier.Lookup)} />
              <button className="btn btn-outline-dark" disabled={fileInputsDisabled} style={{ border: 'none' }} onClick={handleDeleteClick(Supplier.Lookup)} aria-label="Delete Lookup File"><i className="bi bi-trash3-fill" aria-hidden="true"></i></button>
            </div>
          </div>
          <div className="col-4 d-flex align-items-center">
            {getIconByState(lookupState)}
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-6">
            <label htmlFor="gammatek" className="form-label">Upload Gammatek File (Gammatek_Stock_Listing_Category.xlsx)</label>
            <div className="d-flex align-items-center">
              <input className="form-control" type="file" disabled={fileInputsDisabled} id="gammatek" onChange={handleFileChange(Supplier.Gammatek)} />
              <button className="btn btn-outline-dark" disabled={fileInputsDisabled} style={{ border: 'none' }} onClick={handleDeleteClick(Supplier.Gammatek)} aria-label="Delete Gammatek File"><i className="bi bi-trash3-fill" aria-hidden="true"></i></button>
            </div>
          </div>
          <div className="col-4 d-flex align-items-center">
            {getIconByState(gammatekState)}
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-6">
            <label htmlFor="apex" className="form-label">Upload Apex File (Apex Interactive SOH Price List.xlsx)</label>
            <div className="d-flex align-items-center">
              <input className="form-control" type="file" disabled={fileInputsDisabled} id="apex" onChange={handleFileChange(Supplier.Apex)} />
              <button className="btn btn-outline-dark" disabled={fileInputsDisabled} style={{ border: 'none' }} onClick={handleDeleteClick(Supplier.Apex)} aria-label="Delete Apex File"><i className="bi bi-trash3-fill" aria-hidden="true"></i></button>
            </div>
          </div>
          <div className="col-4 d-flex align-items-center">
            {getIconByState(apexState)}
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-6">
            <label htmlFor="solarpop" className="form-label">Upload Solarpop File (Solarpop-Rivergate-SOH.csv)</label>
            <div className="d-flex align-items-center">
              <input className="form-control" type="file" disabled={fileInputsDisabled} id="solarpop" onChange={handleFileChange(Supplier.Solarpop)} />
              <button className="btn btn-outline-dark" disabled={fileInputsDisabled} style={{ border: 'none' }} onClick={handleDeleteClick(Supplier.Solarpop)} aria-label="Delete Solarpop File"><i className="bi bi-trash3-fill" aria-hidden="true"></i></button>
            </div>
          </div>
          <div className="col-4 d-flex align-items-center">
            {getIconByState(solarpopState)}
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-6">
            <label htmlFor="brickup" className="form-label">Upload Brickup File (SOH TEMPLATES SPL (MASTER).xlsx)</label>
            <div className="d-flex align-items-center">
              <input className="form-control" type="file" disabled={fileInputsDisabled} id="brickup" onChange={handleFileChange(Supplier.Brickup)} />
              <button className="btn btn-outline-dark" disabled={fileInputsDisabled} style={{ border: 'none' }} onClick={handleDeleteClick(Supplier.Brickup)} aria-label="Delete Brickup File"><i className="bi bi-trash3-fill" aria-hidden="true"></i></button>
            </div>
          </div>
          <div className="col-4 d-flex align-items-center">
              {getIconByState(brickupState)}
          </div>
        </div>
        
        {isUploading && <LoadingButton classNames='btn-primary mt-5' />}
        {!isUploading && <button type="button" disabled={uploadBtnDisabled} className="btn btn-primary mt-5" onClick={handleUploadClick}>Upload</button>}
        <br />
        {isDownloading && <LoadingButton classNames='btn-info mt-1' />}
        {!isDownloading && <button type="button" className="btn btn-info mt-1" onClick={handleBooksiteDownloadClick}>Download Booksite</button>}
      </div>
    </div>
  );
};

export default ProductStockUpdatesPage;
