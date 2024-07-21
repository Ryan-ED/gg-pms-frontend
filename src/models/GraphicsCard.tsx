import { Product, productFieldLabels, initializeProductFields } from "./Product";

export interface GraphicsCard extends Product {
  manufacturer: string; // The manufacturer of the GPU, e.g., ASUS, MSI, Gigabyte
  chipsetManufacturer: string; // The manufacturer of the GPU chipset, e.g., NVIDIA, AMD
  chipset: string; // The model of the GPU chipset, e.g., RTX 3080, RX 6800 XT
  videoMemory: number; // The amount of VRAM, e.g., 10GB
  memoryType: string; // The type of memory used, e.g., GDDR6, GDDR5X
  coreClock: number; // The base clock speed of the GPU, e.g., 1440 MHz
  boostClock: number; // The maximum boost clock speed of the GPU, e.g., 1710 MHz
  // tdp: number; // The thermal design power, which indicates the maximum amount of heat the GPU can generate that the cooling system can dissipate, e.g., 320W
  // frameSyncTechnology: string; // The frame synchronization technology supported by the GPU, e.g., G-SYNC, FreeSync
  length: number; // The length of the GPU, important for fitting in certain cases, e.g., 285 mm
  outputs: string; // The display outputs available on the GPU, e.g., 3x DisplayPort, 1x HDMI
  // caseSlotWith: number; // The number of case slots the GPU will occupy, e.g., 2.5
  // numberOfFans: number; // The number of fans on the GPU, e.g., 3
  powerConnectors: string; // The type and number of power connectors required, e.g., 2x 8-pin
}

export const graphicsCardFieldLabels: Record<keyof GraphicsCard, string> = {
  ...productFieldLabels,

  manufacturer: 'Manufacturer',
  chipsetManufacturer: 'Chipset Manufacturer',
  chipset: 'Chipset',
  videoMemory: 'Video Memory [VRAM] (GB)',
  memoryType: 'Memory Type',
  coreClock: 'Core Clock (MHz)',
  boostClock: 'Boost Clock (MHz)',
  // tdp: 'Thermal Design Power [TDP] (W)',
  // frameSyncTechnology: 'Frame Sync Technology',
  length: 'Length (mm)',
  outputs: 'Outputs',
  // caseSlotWith: 'Case Slot Width',
  // numberOfFans: 'Number of Fans',
  powerConnectors: 'Power Connectors',
}

export const initializeGraphicsCardFields = (): GraphicsCard => ({
  ...initializeProductFields,

  manufacturer: '',
  chipsetManufacturer: '',
  chipset: '',
  videoMemory: 0,
  memoryType: '',
  coreClock: 0,
  boostClock: 0,
  // tdp: 0,
  // frameSyncTechnology: '',
  length: 0,
  outputs: '',
  // caseSlotWith: 1,
  // numberOfFans: 0,
  powerConnectors: '',
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

export const generateGraphicsCardTags = (data: GraphicsCard): string => {
  return `pc gaming,` +
    `graphics card,` +
    `gpu,` +
    `${data.chipsetManufacturer},` +
    `${data.chipset},` +
    `${data.videoMemory}GB VRAM,` +
    `${data.memoryType},` +
    `${data.coreClock}MHz,` +
    `${data.boostClock}MHz boost,` +
    `${data.length}mm,` +
    `${data.outputs},`;
}

export const graphicsCardChipsetManufacturers = [
  'NVIDIA',
  'AMD',
  'Intel'
];

export const graphicsCardMemoryTypes = [
  'GDDR6X',
  'GDDR6',
  'GDDR5X',
  'GDDR5'
];

// export const graphicsCardFrameSyncTechnologies = [
//   'G-SYNC',
//   'FreeSync',
//   'Adaptive Sync',
//   'None'
// ];
