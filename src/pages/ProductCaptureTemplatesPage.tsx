import { ChangeEvent, useState } from "react";
import ProcessorForm from "../components/ProcessorForm";
import GraphicsCardForm from "../components/GraphicsCardForm";
import { Processor, generateCpuHtmlTableTemplate, generateCpuTablePreview, generateProcessorTags } from "../models/Processor";
import { GraphicsCard, generateGpuHtmlTableTemplate, generateGpuTablePreview, generateGraphicsCardTags } from "../models/GraphicsCard";
import { Product, ProductType } from "../models/Product";
import { Toast } from 'bootstrap';

export default function ProductCaptureTemplatesPage() {
  const [productType, setProductType] = useState<string>();
  const [cpuData, setCpuFormData] = useState<Processor>({} as Processor);
  const [gpuData, setGpuFormData] = useState<GraphicsCard>({} as GraphicsCard);
  const [showCopyButton, setShowCopyButton] = useState(false);
  const toastLiveExample = document.getElementById('liveToast');
  var toastMessage = 'Copied!';

  const showToast = (message: string) => {
    toastMessage = message;
    if (!toastLiveExample) return;
    const toastBootstrap = Toast.getOrCreateInstance(toastLiveExample);
    toastBootstrap.show();
  };

  const handleCopyTableToClipboard = () => {
    var tableTemplateHtml = '';
    switch (productType) {
      case 'cpu':
        tableTemplateHtml = generateCpuHtmlTableTemplate(cpuData);
        break;
      case 'gpu':
        tableTemplateHtml = generateGpuHtmlTableTemplate(gpuData);
        break;
    }
        
    navigator.clipboard.writeText(tableTemplateHtml)
      .then(() => showToast('Copied table template!'))
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  };

  const handleCopyTagsToClipboard = () => {
    var tags = '';
    switch (productType) {
      case 'cpu':
        tags = generateProcessorTags(cpuData);
        break;
      case 'gpu':
        tags = generateGraphicsCardTags(gpuData);
        break;
    }
        
    navigator.clipboard.writeText(tags)
    .then(() => showToast('Copied product tags!'))
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  };

  const handleFormClear = () => {
    var preview = document.getElementById('preview');
    if (preview) {
      preview.innerHTML = '';
    }
    setShowCopyButton(false);
  };

  const handleFormSubmit = (data: Product, productType: ProductType) => {
    var preview = document.getElementById('preview');
    
    if (preview) {
        switch (productType) {
          case ProductType.Processor:
            preview.innerHTML = generateCpuTablePreview(data as Processor);
            setCpuFormData(data as Processor);
            break;
          case ProductType.GraphicsCard:
            preview.innerHTML = generateGpuTablePreview(data as GraphicsCard);
            setGpuFormData(data as GraphicsCard);
            break;
        }
    }

    setShowCopyButton(true);
  };

  function handleDropdownChange(event: ChangeEvent<HTMLSelectElement>): void {
    handleFormClear();
    setProductType(event.target.value);
  }

  return (
    <>
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
              <GraphicsCardForm onSubmit={handleFormSubmit} onClear={handleFormClear}/>
            </>
          )}
        </div>
      </div>
        {showCopyButton && (
          <div>
            <button onClick={handleCopyTableToClipboard}>Copy table to Clipboard</button>
            <button onClick={handleCopyTagsToClipboard}>Copy tags to Clipboard</button>
          </div>
        )}
      <div id="preview"></div>

      <div className="toast-container position-absolute top-0 end-50">
          <div id="liveToast" className="toast align-items-center text-bg-primary border-0" role="alert" aria-live="assertive" aria-atomic="true">
          <div className="d-flex">
            <div className="toast-body">
              {toastMessage}
            </div>
            <button type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
        </div>
      </div>
    </>
  );
}