export interface GraphicsCard {
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
  productName: 'Product Name',
  manufacturersWebsite: 'Manufacturer\'s Website',
  additionalInfo: 'Additional Information',

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
  productName: '',
  manufacturersWebsite: '',
  additionalInfo: '',

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
  return `
    <div class="text-start">
      <table class="table table-dark table-striped">
        <tr>
          <th class="w-25">Product Name</th>
          <td>${data.productName}</td>
        </tr>
        <tr>
          <th class="w-25">Chipset</th>
          <td>${data.chipset}</td>
        </tr>
        <tr>
          <th>Memory</th>
          <td>${data.memory}</td>
        </tr>
        <tr>
          <th>Core Clock</th>
          <td>${data.coreClock}</td>
        </tr>
        <tr>
          <th>Boost Clock</th>
          <td>${data.boostClock}</td>
        </tr> 
        <tr>
          <th>TDP</th>
          <td>${data.tdp}</td>
        </tr>
        <tr>
          <th>Outputs</th>
          <td>${data.outputs}</td>
        </tr>
        <tr>
          <th>Length</th>
          <td>${data.length}</td>
        </tr>
        <tr>
          <th>Power Connectors</th>
          <td>${data.powerConnectors}</td>
        </tr>
        <tr>
          <th>Manufacturer</th>
          <td>${data.manufacturer}</td>
        </tr>
      </table>
    </div>
  `;
}

export const generateGpuHtmlTableTemplate = (data: GraphicsCard): string => {
  const table = `
    <table style="width: 65%; text-align: left;">
      <tr>
        <th style="width: 30%;">Socket Type</td>
        <td>${data.chipset}</td>
      </tr>
      <tr>
        <th>Memory</td>
        <td>${data.memory}</td>
      </tr>
      <tr>
        <th>Core Clock</td>
        <td>${data.coreClock}</td>
      </tr>
      <tr>
        <th>Boost Clock</td>
        <td>${data.boostClock}</td>
      </tr>
      <tr>
        <th>TDP</td>
        <td>${data.tdp}</td>
      </tr>
      <tr>
        <th>Outputs</td>
        <td>${data.outputs}</td>
      </tr>
      <tr>
        <th>Length</td>
        <td>${data.length}</td>
      </tr>
      <tr>
        <th>Power Connectors</td>
        <td>${data.powerConnectors}</td>
      </tr>
      <tr>
        <th>Manufacturer</td>
        <td>${data.manufacturer}</td>
      </tr>
    </table>
  `;

  return table;
};