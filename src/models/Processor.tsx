import { Product, initializeProductFields, productFieldLabels } from "./Product";

export interface Processor extends Product {
  socketType: string; // The socket type the CPU is compatible with, e.g., LGA 1200, AM4
  processorFamily: string; // The family of processors, e.g., Intel Core i7, AMD Ryzen 5
  numberOfCores: string; // The number of cores the CPU has, e.g., 8
  baseClockSpeed: string; // The base clock speed of the CPU, e.g., 3.8 GHz
  boostClockSpeed: string; // The boost clock speed of the CPU, e.g., 4.7 GHz
  cacheSize: string; // The size of the CPU's cache, e.g., 16 MB
  tdp: string; // The thermal design power (TDP) of the CPU, e.g., 65W
  integratedGraphics: string; // Indicates whether the CPU has integrated graphics, e.g., Yes, No
}

export const processorFieldLabels: Record<keyof Processor, string> = {
  ...productFieldLabels,

  socketType: 'Socket Type',
  processorFamily: 'Processor Family',
  numberOfCores: 'Number of Cores',
  baseClockSpeed: 'Base Clock Speed',
  boostClockSpeed: 'Boost Clock Speed',
  cacheSize: 'Cache Size',
  tdp: 'Thermal Design Power (TDP)',
  integratedGraphics: 'Integrated Graphics'
};

export const initializeProcessorFields = (): Processor => ({
  ...initializeProductFields,

  socketType: '',
  processorFamily: '',
  numberOfCores: '',
  baseClockSpeed: '',
  boostClockSpeed: '',
  cacheSize: '',
  tdp: '',
  integratedGraphics: '',
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