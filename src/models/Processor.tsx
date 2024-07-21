import { Product, initializeProductFields, productFieldLabels } from "./Product";

export interface Processor extends Product {
  manufacturer: string; // The manufacturer of the CPU, e.g., Intel, AMD
  series: string; // The family of processors, e.g., Intel Core i7, AMD Ryzen 5
  microarchitecture: string; // The microarchitecture of the CPU, e.g., Zen 3, Rocket Lake
  socketType: string; // The socket type the CPU is compatible with, e.g., LGA 1200, AM4
  coreCount: number; // The number of cores the CPU has, e.g., 8
  baseClockSpeed: number; // The base clock speed of the CPU, e.g., 3.8 GHz
  boostClockSpeed: number; // The boost clock speed of the CPU, e.g., 4.7 GHz
  l2CacheSize: number; // The size of the L2 cache, e.g., 4MB
  l3CacheSize: number; // The size of the L3 cache, e.g., 16MB
  tdp: number; // The thermal design power (TDP) of the CPU, e.g., 65W
  integratedGraphics: string; // Indicates whether the CPU has integrated graphics, e.g., Yes, No
  coolerIncluded: boolean; // Indicates whether a cooler is included with the CPU, e.g., true, false
}

export const processorFieldLabels: Record<keyof Processor, string> = {
  ...productFieldLabels,

  manufacturer: 'Manufacturer',
  series: 'Processor Series',
  microarchitecture: 'Microarchitecture',
  socketType: 'Socket Type',
  coreCount: 'Number of Cores',
  baseClockSpeed: 'Base Clock Speed (GHz)',
  boostClockSpeed: 'Boost Clock Speed (GHz)',
  l2CacheSize: 'L2 Cache Size (MB)',
  l3CacheSize: 'L3 Cache Size (MB)',
  tdp: 'Thermal Design Power [TDP] (Watts)',
  integratedGraphics: 'Integrated Graphics',
  coolerIncluded: 'Cooler Included'
};

export const initializeProcessorFields = (): Processor => ({
  ...initializeProductFields,

  manufacturer: '',
  series: '',
  microarchitecture: '',
  socketType: '',
  coreCount: 1,
  baseClockSpeed: 0,
  boostClockSpeed: 0,
  l2CacheSize: 0,
  l3CacheSize: 0,
  tdp: 0,
  integratedGraphics: '',
  coolerIncluded: false
});

export const generateCpuTablePreview = (data: Processor): string => {
  const tableRows = Object.keys(data).map((key) => {
    return `
      <tr>
        <th class="w-25">${processorFieldLabels[key as keyof Processor]}</th>
        <td>${data[key as keyof Processor]}</td>
      </tr>
    `;
  }).join('');

  return `
    <div class="text-start">
      <table class="table table-dark table-striped">
        ${tableRows}
      </table>
    </div>
  `
}

export const generateCpuHtmlTableTemplate = (data: Processor): string => {
  const tableRows = Object.keys(data).map((key) => {
    if (key === 'productName' || key === 'manufacturersWebsite' || key === 'additionalInfo') return '';
    return `
      <tr>
        <th style="width: 30%;">${processorFieldLabels[key as keyof Processor]}</th>
        <td>${data[key as keyof Processor]}</td>
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

export const generateProcessorTags = (data: Processor): string => {
  return `
    pc gaming,
    processor,
    cpu,
    ${data.manufacturer},
    ${data.series},
    ${data.microarchitecture},
    ${data.socketType},
    ${data.coreCount} cores,
    ${data.baseClockSpeed} GHz base,
    ${data.boostClockSpeed} GHz boost,
    ${data.tdp}W TDP,
  `;
}

export const processorManufacturers = [
  'Intel',
  'AMD'
];

export const processorSocketTypes = [
  'AM4',
  'AM5',
  'LGA 1151',
  'LGA 1200',
  'LGA 1700',
  'LGA 2066',
  'TR4'
];

export const processorSeries = [
  'Intel Core i3',
  'Intel Core i5',
  'Intel Core i7',
  'Intel Core i9',
  'AMD Ryzen 3',
  'AMD Ryzen 5',
  'AMD Ryzen 7',
  'AMD Ryzen 9'
];

export const processorIntegratedGraphicsOptions = [
  'None',
  'Radeon Graphics',
  'Intel UHD Graphics'
];
