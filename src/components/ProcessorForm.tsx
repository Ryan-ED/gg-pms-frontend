import React, { ChangeEvent, FC, FormEvent, useState } from "react";

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

interface ProcessorCaptureFormProps {
  onSubmit: (data: Processor) => void;
  onClear: () => void;
}

const ProcessorCaptureForm: FC<ProcessorCaptureFormProps> = ({ onSubmit, onClear }) =>  {
  const initialState = {
    productName: '',
    socketType: '',
    processorFamily: '',
    numberOfCores: '',
    baseClockSpeed: '',
    boostClockSpeed: '',
    cacheSize: '',
    tdp: '',
    integratedGraphics: '',
  };

  const [processorData, setProcessor] = useState<Processor>(initialState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProcessor((prevProcessor) => ({
      ...prevProcessor,
      [name]: value,
    }));
  };

  const clearForm = () => {
    setProcessor(initialState);
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
        <div className="mb-3">
          <label htmlFor="productName" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            className="form-control"
            id="productName"
            name="productName"
            value={processorData.productName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="socketType" className="form-label">
            Socket Type
          </label>
          <input
            type="text"
            className="form-control"
            id="socketType"
            name="socketType"
            value={processorData.socketType}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="processorFamily" className="form-label">
            Processor Family
          </label>
          <input
            type="text"
            className="form-control"
            id="processorFamily"
            name="processorFamily"
            value={processorData.processorFamily}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="numberOfCores" className="form-label">
            Number of Cores
          </label>
          <input
            type="text"
            className="form-control"
            id="numberOfCores"
            name="numberOfCores"
            value={processorData.numberOfCores}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="baseClockSpeed" className="form-label">
            Base Clock Speed
          </label>
          <input
            type="text"
            className="form-control"
            id="baseClockSpeed"
            name="baseClockSpeed"
            value={processorData.baseClockSpeed}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="boostClockSpeed" className="form-label">
            Boost Clock Speed
          </label>
          <input
            type="text"
            className="form-control"
            id="boostClockSpeed"
            name="boostClockSpeed"
            value={processorData.boostClockSpeed}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cacheSize" className="form-label">
            Cache Size
          </label>
          <input
            type="text"
            className="form-control"
            id="cacheSize"
            name="cacheSize"
            value={processorData.cacheSize}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tdp" className="form-label">
            TDP
          </label>
          <input
            type="text"
            className="form-control"
            id="tdp"
            name="tdp"
            value={processorData.tdp}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="integratedGraphics" className="form-label">
            Integrated Graphics
          </label>
          <input
            type="text"
            className="form-control"
            id="integratedGraphics"
            name="integratedGraphics"
            value={processorData.integratedGraphics}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <button className="btn btn-warning" type="button" onClick={clearForm}>Clear</button> {/* Add this button */}
      </form>
    </div>
  );
}

export default ProcessorCaptureForm;