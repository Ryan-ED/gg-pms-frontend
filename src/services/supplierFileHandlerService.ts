import { SupplierFile } from "../models/Supplier";
import httpService from "./httpService";

const FILE_UPLOAD_URL = '/file-upload';

const uploadFile = async (file: SupplierFile): Promise<Response> => {
  const formData = new FormData();
  formData.append('file', file.File);
  formData.append('supplier', file.Supplier);

  try {
    return await httpService.uploadFile<Response>(FILE_UPLOAD_URL, formData);
  } catch (error) {
    return Promise.reject(error);
  }
}

const downloadBooksiteFile = async (): Promise<void> => {
    try {
      await httpService.downloadFile(`${FILE_UPLOAD_URL}/booksite`);
    } catch (error) {
      return Promise.reject(error);
    }
}

export { uploadFile, downloadBooksiteFile };