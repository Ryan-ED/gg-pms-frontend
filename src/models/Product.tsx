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
  GraphicsCard = 'GraphicsCard',
  Memory = 'Memory'
}

export const generateTablePreview = <T extends Product>(data: T, fieldLabels: { [key in keyof T]: string }): string => {
  const tableRows = Object.keys(data).map((key) => {
    return `
      <tr>
        <th class="w-25">${fieldLabels[key as keyof T]}</th>
        <td>${data[key as keyof T]}</td>
      </tr>
    `;
  }).join('');

  return `
    <div class="text-start">
      <table class="table table-dark table-striped">
        ${tableRows}
      </table>
    </div>
  `;
}

export const generateHtmlTableTemplate = <T extends Product>(data: T, fieldLabels: { [key in keyof T]: string }): string => {
  const tableRows = Object.keys(data).map((key) => {
    if (key === 'productName' || key === 'manufacturersWebsite' || key === 'additionalInfo') return '';
    return `
      <tr>
        <th style="width: 30%;">${fieldLabels[key as keyof T]}</th>
        <td>${data[key as keyof T]}</td>
      </tr>
    `;
  }).join('');

  return `
    <h3>Tech specs:</h3>
    <table style="width: 65%; text-align: left;">
      ${tableRows}
    </table>
    ${data.additionalInfo && `<p>${data.additionalInfo}</p>`}
    ${data.manufacturersWebsite && `<p><a href="${data.manufacturersWebsite}" target="_blank">Click here for the manufacturer's website</a></p>`}
  `;
};