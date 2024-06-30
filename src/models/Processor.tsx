export interface Processor {
  productName: string; // The name of the product
  manufacturersWebsite?: string; // Manufacturer's website URL for the product
  additionalInfo?: string; // Additional information or features of the CPU, e.g., "Supports Hyper-Threading"

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
  productName: 'Product Name',
  manufacturersWebsite: 'Manufacturer\'s Website',
  additionalInfo: 'Additional Information',

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
  productName: '',
  manufacturersWebsite: '',
  additionalInfo: '',

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
  return `
    <div class="text-start">
      <table class="table table-dark table-striped">
        <tr>
          <th class="w-25">Socket Type</th>
          <td>${data.productName}</td>
        </tr>
        <tr>
          <th class="w-25">Socket Type</th>
          <td>${data.socketType}</td>
        </tr>
        <tr>
          <th>Processor Family</th>
          <td>${data.processorFamily}</td>
        </tr>
        <tr>
          <th>Number of Cores</th>
          <td>${data.numberOfCores}</td>
        </tr>
        <tr>
          <th>Base Clock Speed</th>
          <td>${data.baseClockSpeed}</td>
        </tr>
        <tr>
          <th>Boost Clock Speed</th>
          <td>${data.boostClockSpeed}</td>
        </tr>
        <tr>
          <th>Cache Size</th>
          <td>${data.cacheSize}</td>
        </tr>
        <tr>
          <th>TDP</th>
          <td>${data.tdp}</td>
        </tr>
        <tr>
          <th>Integrated Graphics</th>
          <td>${data.integratedGraphics}</td>
        </tr>
      </table>
    </div>
  `;
}

export const generateCpuHtmlTableTemplate = (data: Processor): string => {
  const table = `
    <table style="width: 65%; text-align: left;">
      <tr>
        <th style="width: 30%;">Socket Type</td>
        <td>${data.socketType}</td>
      </tr>
      <tr>
        <th>Processor Family</td>
        <td>${data.processorFamily}</td>
      </tr>
      <tr>
        <th>Number of Cores</td>
        <td>${data.numberOfCores}</td>
      </tr>
      <tr>
        <th>Base Clock Speed</td>
        <td>${data.baseClockSpeed}</td>
      </tr>
      <tr>
        <th>Boost Clock Speed</td>
        <td>${data.boostClockSpeed}</td>
      </tr>
      <tr>
        <th>Cache Size</td>
        <td>${data.cacheSize}</td>
      </tr>
      <tr>
        <th>TDP</td>
        <td>${data.tdp}</td>
      </tr>
      <tr>
        <th>Integrated Graphics</td>
        <td>${data.integratedGraphics}</td>
      </tr>
    </table>
  `;

  return table;
};