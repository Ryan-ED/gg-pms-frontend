import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import { Processor, initializeProcessorFields, processorFieldLabels, processorIntegratedGraphicsOptions, processorManufacturers, processorSeries, processorSocketTypes } from "../models/Processor";
import { ProductType, productFieldLabels } from "../models/Product";

interface ProcessorCaptureFormProps {
  onSubmit: (data: Processor, productType: ProductType) => void;
  onClear: () => void;
}

const ProcessorCaptureForm: FC<ProcessorCaptureFormProps> = ({ onSubmit, onClear }) =>  {
  const [processorData, setProcessor] = useState<Processor>(initializeProcessorFields());

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
    onSubmit(processorData, ProductType.Processor);
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
            {productFieldLabels.productName}
          </label>
        </div>

        <div className="form-floating mb-3">
          <select required className="form-select"
            id="manufacturer"
            value={processorData.manufacturer}
            onChange={handleChange}>
            <option value="">Select a manufacturer</option>
            { processorManufacturers.map((manufacturer) => (
              <option key={manufacturer} value={manufacturer}>{manufacturer}</option>
            ))}
          </select>
          <label htmlFor="manufacturer">
            {processorFieldLabels.manufacturer}
          </label>
        </div>
        
        <div className="form-floating mb-3">
          <select required className="form-select"
            id="series"
            value={processorData.series}
            name="series"
            onChange={handleChange}>
            <option value="">Select a chipset series</option>
            { processorSeries.map((series) => (
              <option key={series} value={series}>{series}</option>
            ))}
          </select>
          <label htmlFor="series">
            {processorFieldLabels.series}
          </label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="microarchitecture"
            name="microarchitecture"
            value={processorData.microarchitecture}
            onChange={handleChange}
          />
          <label htmlFor="microarchitecture">
            {processorFieldLabels.microarchitecture}
          </label>
        </div>

        <div className="form-floating mb-3">
          <select required className="form-select"
            id="socketType"
            value={processorData.socketType}
            name="socketType"
            onChange={handleChange}>
            <option value="">Select a socket type</option>
            { processorSocketTypes.map((socketType) => (
              <option key={socketType} value={socketType}>{socketType}</option>
            ))}
          </select>
          <label htmlFor="socketType">
            {processorFieldLabels.socketType}
          </label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="number"
            className="form-control"
            id="coreCount"
            name="coreCount"
            value={processorData.coreCount}
            onChange={handleChange}
          />
          <label htmlFor="coreCount">
            {processorFieldLabels.coreCount}
          </label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="number"
            className="form-control"
            id="baseClockSpeed"
            name="baseClockSpeed"
            value={processorData.baseClockSpeed}
            onChange={handleChange}
          />
          <label htmlFor="baseClockSpeed">
            {processorFieldLabels.baseClockSpeed}
          </label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="number"
            className="form-control"
            id="boostClockSpeed"
            name="boostClockSpeed"
            value={processorData.boostClockSpeed}
            onChange={handleChange}
          />
          <label htmlFor="boostClockSpeed">
            {processorFieldLabels.boostClockSpeed}
          </label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="number"
            className="form-control"
            id="l2CacheSize"
            name="l2CacheSize"
            value={processorData.l2CacheSize}
            onChange={handleChange}
          />
          <label htmlFor="l2CacheSize">
            {processorFieldLabels.l2CacheSize}
          </label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="number"
            className="form-control"
            id="l3CacheSize"
            name="l3CacheSize"
            value={processorData.l3CacheSize}
            onChange={handleChange}
          />
          <label htmlFor="l3CacheSize">
            {processorFieldLabels.l3CacheSize}
          </label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="number"
            className="form-control"
            id="tdp"
            name="tdp"
            value={processorData.tdp}
            onChange={handleChange}
          />
          <label htmlFor="tdp">
            {processorFieldLabels.tdp}
          </label>
        </div>

        <div className="form-check form-switch mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            id="coolerIncluded"
            name="coolerIncluded"
            value={processorData.coolerIncluded ? "Yes" : "No"}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="coolerIncluded">
            {processorFieldLabels.coolerIncluded}
          </label>
        </div>

        <div className="form-floating mb-3">
          <select required className="form-select"
            id="integratedGraphics"
            value={processorData.integratedGraphics}
            name="integratedGraphics"
            onChange={handleChange}>
            <option value="">Select an integrated graphics technology</option>
            { processorIntegratedGraphicsOptions.map((integratedGraphics) => (
              <option key={integratedGraphics} value={integratedGraphics}>{integratedGraphics}</option>
            ))}
          </select>
          <label htmlFor="integratedGraphics">
            {processorFieldLabels.integratedGraphics}
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
            {productFieldLabels.manufacturersWebsite}
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
            {productFieldLabels.additionalInfo}
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