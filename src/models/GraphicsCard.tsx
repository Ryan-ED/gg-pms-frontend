import { Product, productFieldLabels, initializeProductFields } from "./Product";

export interface GraphicsCard extends Product {
  productName: string; // The name of the product
  manufacturersWebsite?: string; // Manufacturer's website URL for the product
  additionalInfo?: string; // Additional information or features of the CPU, e.g., "Supports Hyper-Threading"

  chipset: string; // The type of GPU chipset, e.g., NVIDIA GeForce RTX 3080
  memory: string; // The amount of VRAM, e.g., 10GB GDDR6X
  coreClock: string; // The base clock speed of the GPU, e.g., 1440 MHz
  boostClock: string; // The maximum boost clock speed of the GPU, e.g., 1710 MHz
  tdp: string; // The thermal design power, which indicates the maximum amount of heat the GPU can generate that the cooling system can dissipate, e.g., 320W
  outputs: string; // The display outputs available on the GPU, e.g., 3x DisplayPort, 1x HDMI
  length: string; // The length of the GPU, important for fitting in certain cases, e.g., 285 mm
  powerConnectors: string; // The type and number of power connectors required, e.g., 2x 8-pin
  manufacturer: string; // The manufacturer of the GPU, e.g., ASUS, MSI, Gigabyte
}

export const graphicsCardFieldLabels: Record<keyof GraphicsCard, string> = {
  ...productFieldLabels,

  chipset: 'Chipset',
  memory: 'Memory',
  coreClock: 'Core Clock',
  boostClock: 'Boost Clock',
  tdp: 'Thermal Design Power (TDP)',
  outputs: 'Outputs',
  length: 'Length',
  powerConnectors: 'Power Connectors',
  manufacturer: 'Manufacturer'
}

export const initializeGraphicsCardFields = (): GraphicsCard => ({
  ...initializeProductFields,

  chipset: '',
  memory: '',
  coreClock: '',
  boostClock: '',
  tdp: '',
  outputs: '',
  length: '',
  powerConnectors: '',
  manufacturer: ''
});

export const generateGpuTablePreview = (data: GraphicsCard): string => {
  const tableRows = Object.keys(data).map((key) => {
    return `
      <tr>
        <th class="w-25">${graphicsCardFieldLabels[key as keyof GraphicsCard]}</th>
        <td>${data[key as keyof GraphicsCard]}</td>
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

export const generateGpuHtmlTableTemplate = (data: GraphicsCard): string => {
  const tableRows = Object.keys(data).map((key) => {
    if (key === 'productName' || key === 'manufacturersWebsite' || key === 'additionalInfo') return '';
    return `
      <tr>
        <th style="width: 30%;">${graphicsCardFieldLabels[key as keyof GraphicsCard]}</th>
        <td>${data[key as keyof GraphicsCard]}</td>
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