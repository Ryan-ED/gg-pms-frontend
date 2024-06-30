import React, { useState } from "react";
import ProcessorForm, { Processor } from "../components/ProcessorForm";



export default function ProductCaptureTemplatesPage() {
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
  return (
    <div className="container mt-5">
      <h1>Product Capture Templates</h1>
      <div className="row">
        <div className="col-md-6">
          <ProcessorForm onSubmit={handleFormSubmit} onClear={handleFormClear}/>
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

