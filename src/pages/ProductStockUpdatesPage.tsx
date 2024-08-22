import React, { useState } from 'react';

const ProductStockUpdatesPage: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>, supplier: Supplier) => {
    const selectedFiles = Array.from(event.target.files || []);
    setFiles(selectedFiles);
  };

  const handleUpload = () => {
    // Handle file upload logic here
    console.log(files);
  };

  return (
    <div>
      <h1>Product Stock Updates</h1>

      <div className="container form">
        <div className="row mt-4">
          <div className="col-5">
            <label htmlFor="lookup" className="form-label">Upload Lookup File (skus_and_ids.csv)</label>
            <input className="form-control" type="file" id="lookup" onChange={handleFileChange} />
          </div>
          <div className="col-5">
            label here
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-5">
            <label htmlFor="apex" className="form-label">Upload Apex File (Apex Interactive SOH Price List.xlsx)</label>
            <input className="form-control" type="file" id="apex" onChange={handleFileChange} />
          </div>
          <div className="col-5">
            label here
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-5">
            <label htmlFor="solarpop" className="form-label">Upload Lookup File (Solarpop-Rivergate-SOH.csv)</label>
            <input className="form-control" type="file" id="solarpop" onChange={handleFileChange} />
          </div>
          <div className="col-5">
            label here
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-5">
            <label htmlFor="brickup" className="form-label">Upload Brickup File (SOH TEMPLATES SPL (MASTER).xlsx)</label>
            <input className="form-control" type="file" id="brickup" onChange={handleFileChange} />
          </div>
          <div className="col-5">
            label here
          </div>
        </div>
        
        <button type="button" className="btn btn-primary" onClick={handleUpload}>Upload</button>
      </div>
    </div>
  );
};

export default ProductStockUpdatesPage;

export enum Supplier {
  Rectron,
  Syntech,
  Solarpop,
  Gammatek,
  Booksite,
  Apex,
  BrickUp
}