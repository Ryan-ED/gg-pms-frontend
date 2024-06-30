export interface Product {
  productName: string; // The name of the product
  manufacturersWebsite?: string; // Manufacturer's website URL for the product
  additionalInfo?: string; // Additional information or features of the CPU, e.g., "Supports Hyper-Threading"
}

export const productFieldLabels: Record<keyof Product, string> = {
  productName: 'Product Name',
  manufacturersWebsite: 'Manufacturer\'s Website',
  additionalInfo: 'Additional Information'
}

export const initializeProductFields: { [key in keyof Product]: string } = {
  productName: '',
  manufacturersWebsite: '',
  additionalInfo: ''
}

export enum ProductType {
  Processor = 'Processor',
  GraphicsCard = 'GraphicsCard'
}
