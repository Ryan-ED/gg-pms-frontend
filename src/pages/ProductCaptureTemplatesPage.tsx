import { ChangeEvent, useState } from "react";
import ProcessorForm from "../components/ProcessorForm";
import GraphicsCardForm from "../components/GraphicsCardForm";
import { Processor, generateCpuHtmlTableTemplate, generateCpuTablePreview } from "../models/Processor";
import { GraphicsCard, generateGpuHtmlTableTemplate, generateGpuTablePreview } from "../models/GraphicsCard";

export default function ProductCaptureTemplatesPage() {
  const [productType, setProductType] = useState<string>();
  const [cpuData, setCpuFormData] = useState<Processor>({} as Processor);
  const [gpuData, setGpuFormData] = useState<GraphicsCard>({} as GraphicsCard);
  const [showCopyButton, setShowCopyButton] = useState(false);

  const handleCopyToClipboard = () => {
    const htmlContent = 
      productType === 'cpu' 
        ? generateCpuHtmlTableTemplate(cpuData)
        : generateGpuHtmlTableTemplate(gpuData);
        
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

  const handleCpuFormSubmit = (data: Processor) => {
    // Handle the form data received from the child component
    console.log('Form data received in parent:', data);
    var preview = document.getElementById('preview');
    if (preview) {
      preview.innerHTML = generateCpuTablePreview(data);
    }
    // You can set state here if needed
    setCpuFormData(data);
    setShowCopyButton(true);
  };

  const handleGpuFormSubmit = (data: GraphicsCard) => {
    // Handle the form data received from the child component
    console.log('Form data received in parent:', data);
    var preview = document.getElementById('preview');
    if (preview) {
      preview.innerHTML = generateGpuTablePreview(data);
    }
    // You can set state here if needed
    setGpuFormData(data);
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
              <ProcessorForm onSubmit={handleCpuFormSubmit} onClear={handleFormClear}/>
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