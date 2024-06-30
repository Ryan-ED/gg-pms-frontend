import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import { Processor, initializeProcessorFields } from "../models/Processor";

interface ProcessorCaptureFormProps {
  onSubmit: (data: Processor) => void;
  onClear: () => void;
}

const ProcessorCaptureForm: FC<ProcessorCaptureFormProps> = ({ onSubmit, onClear }) =>  {

  const [processorData, setProcessor] = useState<Processor>(initializeProcessorFields());

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProcessor((prevProcessor) => ({
      ...prevProcessor,
      [name]: value,
    }));
  };

  const clearForm = () => {
    setProcessor(initializeProcessorFields());
    onClear();
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(processorData);
  };

  return (
    <div className="container mt-5">
      <h2>Processor (CPU)</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="productName"
            name="productName"
            value={processorData.productName}
            onChange={handleChange}
          />
          <label htmlFor="productName">
            Product Name
          </label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="socketType"
            name="socketType"
            value={processorData.socketType}
            onChange={handleChange}
          />
          <label htmlFor="socketType">
            Socket Type
          </label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="processorFamily"
            name="processorFamily"
            value={processorData.processorFamily}
            onChange={handleChange}
          />
          <label htmlFor="processorFamily">
            Processor Family
          </label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="numberOfCores"
            name="numberOfCores"
            value={processorData.numberOfCores}
            onChange={handleChange}
          />
          <label htmlFor="numberOfCores">
            Number of Cores
          </label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="baseClockSpeed"
            name="baseClockSpeed"
            value={processorData.baseClockSpeed}
            onChange={handleChange}
          />
          <label htmlFor="baseClockSpeed">
            Base Clock Speed
          </label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="boostClockSpeed"
            name="boostClockSpeed"
            value={processorData.boostClockSpeed}
            onChange={handleChange}
          />
          <label htmlFor="boostClockSpeed">
            Boost Clock Speed
          </label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="cacheSize"
            name="cacheSize"
            value={processorData.cacheSize}
            onChange={handleChange}
          />
          <label htmlFor="cacheSize">
            Cache Size
          </label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="tdp"
            name="tdp"
            value={processorData.tdp}
            onChange={handleChange}
          />
          <label htmlFor="tdp">
            TDP
          </label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="integratedGraphics"
            name="integratedGraphics"
            value={processorData.integratedGraphics}
            onChange={handleChange}
          />
          <label htmlFor="integratedGraphics">
            Integrated Graphics
          </label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="url"
            className="form-control"
            id="manufacturersWebsite"
            name="manufacturersWebsite"
            value={processorData.manufacturersWebsite}
            onChange={handleChange}
          />
          <label htmlFor="manufacturersWebsite">
            Manufacturer's Website
          </label>
        </div>
        <div className="form-floating mb-3">
          <textarea
            className="form-control"
            id="additionalInfo"
            name="additionalInfo"
            value={processorData.additionalInfo}
            onChange={handleChange}
          />
          <label htmlFor="additionalInfo">
            Additional Information
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <button className="btn btn-secondary ms-2" type="button" onClick={clearForm}>Clear</button>
      </form>
    </div>
  );
}

export default ProcessorCaptureForm;