import { ChangeEvent, useState } from "react";
import ProcessorForm from "../components/ProcessorForm";
import GraphicsCardForm from "../components/GraphicsCardForm";
import {Processor, generateProcessorTags, processorFieldLabels} from "../models/Processor";
import {GraphicsCard, generateGraphicsCardTags, graphicsCardFieldLabels} from "../models/GraphicsCard";
import {generateHtmlTableTemplate, generateTablePreview, Product, ProductType} from "../models/Product";
import { Toast } from 'bootstrap';
import MemoryForm from "../components/MemoryForm";
import {generateMemoryTags, Memory, memoryFieldLabels} from "../models/Memory";

export default function ProductCaptureTemplatesPage() {
  const [productType, setProductType] = useState<string>();
  const [cpuData, setCpuFormData] = useState<Processor>({} as Processor);
  const [gpuData, setGpuFormData] = useState<GraphicsCard>({} as GraphicsCard);
  const [ramData, setRamFormData] = useState<Memory>({} as Memory);
  const [showCopyButton, setShowCopyButton] = useState(false);
  const toastLiveExample = document.getElementById('liveToast');
  const [toastMessage, setToastMessage] = useState("");

  const showToast = (message: string) => {
    setToastMessage(message);
    // alert(message);
    if (!toastLiveExample) return;
    const toastBootstrap = Toast.getOrCreateInstance(toastLiveExample);
    toastBootstrap.show();
  };

  const handleCopyTableToClipboard = () => {
    let tableTemplateHtml = '';
    switch (productType) {
      case 'gpu':
        tableTemplateHtml = generateHtmlTableTemplate(gpuData, graphicsCardFieldLabels);
        break;
      case 'cpu':
        tableTemplateHtml = generateHtmlTableTemplate(cpuData, processorFieldLabels);
        break;
      case 'ram':
        tableTemplateHtml = generateHtmlTableTemplate(ramData, memoryFieldLabels);
        break;
    }
        
    navigator.clipboard.writeText(tableTemplateHtml)
      .then(() => showToast('Copied table template!'))
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  };

  const handleCopyTagsToClipboard = () => {
    let tags = '';
    switch (productType) {
      case 'gpu':
        tags = generateGraphicsCardTags(gpuData);
        break;
      case 'cpu':
        tags = generateProcessorTags(cpuData);
        break;
      case 'ram':
        tags = generateMemoryTags(ramData);
        break;
    }
        
    navigator.clipboard.writeText(tags)
    .then(() => showToast('Copied product tags!'))
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  };

  const handleFormClear = () => {
    const preview = document.getElementById('preview');
    if (preview) {
      preview.innerHTML = '';
    }
    setShowCopyButton(false);
  };

  const handleFormSubmit = (data: Product, productType: ProductType) => {
    const preview = document.getElementById('preview');

    if (preview) {
        switch (productType) {
          case ProductType.Processor:
            preview.innerHTML = generateTablePreview(data as Processor, processorFieldLabels);
            setCpuFormData(data as Processor);
            break;
          case ProductType.GraphicsCard:
            preview.innerHTML = generateTablePreview(data as GraphicsCard, graphicsCardFieldLabels);
            setGpuFormData(data as GraphicsCard);
            break;
          case ProductType.Memory:
            preview.innerHTML = generateTablePreview(data as Memory, memoryFieldLabels);
            setRamFormData(data as Memory);
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
      <div className="form-floating">
        <select className="form-select" id="productType" value={productType} onChange={handleDropdownChange}>
          <option>Select Product Type</option>
          <option value='gpu'>Graphics Card</option>
          <option value='cpu'>Processor</option>
          <option value='ram'>Memory (RAM)</option>
        </select>
        <label htmlFor="productType">Product Type:</label>
      </div>

      <div className="row">
        <div className="col-lg-6">

          <div className="container mt-3">

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

            {productType === 'ram' && (
                <>
                  <MemoryForm onSubmit={handleFormSubmit} onClear={handleFormClear}/>
                </>
            )}
          </div>
        </div>

        <div className="col-lg-6">
          {showCopyButton && (
              <div className="mt-3 mb-3">
                <button type="button" className="btn btn-outline-info" onClick={handleCopyTableToClipboard}>Copy table
                  to Clipboard
                </button>
                <button type="button" className="btn btn-outline-info ms-3" onClick={handleCopyTagsToClipboard}>Copy
                  tags to Clipboard
                </button>
              </div>
          )}
          <div id="preview"></div>
        </div>
      </div>

      <div className="toast-container top-50 end-50">
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