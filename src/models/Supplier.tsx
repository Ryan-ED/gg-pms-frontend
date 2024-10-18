export enum Supplier {
  Rectron = 'Rectron',
  Syntech = 'Syntech',
  Solarpop = 'Solarpop',
  Gammatek = 'Gammatek',
  Booksite = 'Booksite',
  Apex = 'Apex',
  Brickup = 'Brickup',
  Lookup = 'Lookup',
}

export interface SupplierFile {
  Supplier: Supplier;
  File: File;
}

export enum FileUploadState {
  NotUploaded = 'NotUploaded',
  Uploading = 'Uploading',
  Uploaded = 'Uploaded',
  Failed = 'Failed',
}