import { ChangeEvent, useState } from "react";
import ProcessorForm, { Processor } from "../components/ProcessorForm";
import GraphicsCardForm, { GraphicsCard } from "../components/GraphicsCardForm";

export default function ProductCaptureTemplatesPage() {
  const [productType, setProductType] = useState<string>();
  const [formData, setFormData] = useState<Processor>({} as Processor);
  const [showCopyButton, setShowCopyButton] = useState(false);

  const handleCopyToClipboard = () => {
    const htmlContent = generateHtmlTemplate(formData);
    navigator.clipboard.writeText(htmlContent)
      .then(() => {
        alert('HTML content copied to clipboard!');
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err);
      });
  };

  const handleFormClear = () => {
    var preview = document.getElementById('preview');
    if (preview) {
      preview.innerHTML = '';
    }
    setShowCopyButton(false);
  };

  const handleFormSubmit = (data: Processor) => {
    // Handle the form data received from the child component
    console.log('Form data received in parent:', data);
    var preview = document.getElementById('preview');
    if (preview) {
      preview.innerHTML = generateHtmlPreview(data);
    }
    // You can set state here if needed
    setFormData(data);
    setShowCopyButton(true);
  };
  const handleGpuFormSubmit = (data: GraphicsCard) => {
    // Handle the form data received from the child component
    console.log('Form data received in parent:', data);
    var preview = document.getElementById('preview');
    if (preview) {
      preview.innerHTML = generateGpuHtmlPreview(data);
    }
    // You can set state here if needed
    // setFormData(data);
    setShowCopyButton(true);
  };

  function handleDropdownChange(event: ChangeEvent<HTMLSelectElement>): void {
    handleFormClear();
    setProductType(event.target.value);
  }

  return (
    <div className="container mt-5">
      <h1>Product Capture Templates</h1>
      
      <label htmlFor="productType">Product Type:</label>
        <select className="form-select" id="productType" value={productType} onChange={handleDropdownChange}>
          <option value='cpu'>Processor</option>
          <option value='gpu'>Graphics Card</option>
        </select>
      <div className="row">
        <div className="col-md-6">
          {productType === 'cpu' && (
            <>
              <ProcessorForm onSubmit={handleFormSubmit} onClear={handleFormClear}/>
            </>
          )}

          {productType === 'gpu' && (
            <>
              <GraphicsCardForm onSubmit={handleGpuFormSubmit} onClear={handleFormClear}/>
            </>
          )}
        </div>
      </div>
        {showCopyButton && (
          <button onClick={handleCopyToClipboard}>Copy to Clipboard</button>
        )}
      <div id="preview"></div>
    </div>
  );

}

function generateHtmlTemplate(data: Processor): string {
  // generate html table from the processor data
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

function generateHtmlPreview(data: Processor): string {
  // generate bootstrap table from the processor data
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

function generateGpuHtmlPreview(data: GraphicsCard): string {
  // generate bootstrap table from the processor data
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
      </table>
    </div>
  `;
}