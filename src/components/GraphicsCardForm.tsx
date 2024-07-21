import { ChangeEvent, FC, FormEvent, useState } from "react";
import { GraphicsCard, graphicsCardChipsetManufacturers, graphicsCardFieldLabels, graphicsCardMemoryTypes, initializeGraphicsCardFields } from "../models/GraphicsCard";
import { ProductType } from "../models/Product";

// just like ProcessorForm.tsx, but for Graphics Cards
interface GraphicsCardCaptureFormProps {
  onSubmit: (data: GraphicsCard, productType: ProductType) => void;
  onClear: () => void;
}

const GraphicsCardForm: FC<GraphicsCardCaptureFormProps> = ({ onSubmit, onClear }) =>  {

  const [graphicsCardData, setGraphicsCard] = useState<GraphicsCard>(initializeGraphicsCardFields());

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setGraphicsCard((prevGraphicsCard) => ({
      ...prevGraphicsCard,
      [name]: value,
    }));
  };

  const clearForm = () => {
    setGraphicsCard(initializeGraphicsCardFields());
    onClear();
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(graphicsCardData, ProductType.GraphicsCard);
  };

  return (
    <div className="container mt-5">
      <h2>Graphics Card (GPU)</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-floating mb-3">
          <input type="text"
            className="form-control"
            id="productName"
            name="productName"
            value={graphicsCardData.productName}
            onChange={handleChange}
          />
          <label htmlFor="productName">Product Name</label>
        </div>

        <div className="form-floating mb-3">
          <input type="text"
            className="form-control"
            id="manufacturer"
            name="manufacturer"
            value={graphicsCardData.manufacturer}
            onChange={handleChange}
          />
          <label htmlFor="manufacturer">{graphicsCardFieldLabels.manufacturer}</label>
        </div>

        <div className="form-floating mb-3">
          <select required className="form-select"
            id="chipsetManufacturer"
            value={graphicsCardData.chipsetManufacturer}
            name="chipsetManufacturer"
            onChange={handleChange}
          >
            <option value="">Select a chipset manufacturer</option>
            { graphicsCardChipsetManufacturers.map((manufacturer) => (
              <option key={manufacturer} value={manufacturer}>{manufacturer}</option>
            ))}
          </select>
          <label htmlFor="chipsetManufacturer">{graphicsCardFieldLabels.chipsetManufacturer}</label>
        </div>

        <div className="form-floating mb-3">
          <input type="text"
            className="form-control"
            id="chipset"
            name="chipset"
            value={graphicsCardData.chipset}
            onChange={handleChange}
          />
          <label htmlFor="chipset">{graphicsCardFieldLabels.chipset}</label>
        </div>

        <div className="form-floating mb-3">
          <input type="number"
            className="form-control"
            id="videoMemory"
            name="videoMemory"
            value={graphicsCardData.videoMemory}
            onChange={handleChange}
          />
          <label htmlFor="videoMemory">{graphicsCardFieldLabels.videoMemory}</label>
        </div>

        <div className="form-floating mb-3">
          <select required className="form-select"
            id="memoryType"
            value={graphicsCardData.memoryType}
            name="memoryType"
            onChange={handleChange}
          >
            <option value="">Select a memory type</option>
            { graphicsCardMemoryTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          <label htmlFor="memoryType">{graphicsCardFieldLabels.memoryType}</label>
        </div>

        <div className="form-floating mb-3">
          <input type="number"
            className="form-control"
            id="coreClock"
            name="coreClock"
            value={graphicsCardData.coreClock}
            onChange={handleChange}
          />
          <label htmlFor="coreClock">{graphicsCardFieldLabels.coreClock}</label>
        </div>

        <div className="form-floating mb-3">
          <input type="number"
            className="form-control"
            id="boostClock"
            name="boostClock"
            value={graphicsCardData.boostClock}
            onChange={handleChange}
          />
          <label htmlFor="boostClock">{graphicsCardFieldLabels.boostClock}</label>
        </div>

        {/* <div className="form-floating mb-3">
          <input type="number"
            className="form-control"
            id="tdp"
            name="tdp"
            value={graphicsCardData.tdp}
            onChange={handleChange}
          />
          <label htmlFor="tdp">{graphicsCardFieldLabels.tdp}</label>
        </div> */}

        {/* <div className="form-floating mb-3">
          <select required className="form-select"
            id="frameSyncTechnology"
            value={graphicsCardData.frameSyncTechnology}
            name="frameSyncTechnology"
            onChange={handleChange}
          >
            <option value="">Select a frame sync technology</option>
            { graphicsCardFrameSyncTechnologies.map((technology) => (
              <option key={technology} value={technology}>{technology}</option>
            ))}
          </select>
          <label htmlFor="frameSyncTechnology">{graphicsCardFieldLabels.frameSyncTechnology}</label>
        </div> */}

        <div className="form-floating mb-3">
          <input type="number"
            className="form-control"
            id="length"
            name="length"
            value={graphicsCardData.length}
            onChange={handleChange}
          />
          <label htmlFor="length">{graphicsCardFieldLabels.length}</label>
        </div>

        <div className="form-floating mb-3">
          <input type="text"
            className="form-control"
            id="outputs"
            name="outputs"
            value={graphicsCardData.outputs}
            onChange={handleChange}
          />
          <label htmlFor="outputs">{graphicsCardFieldLabels.outputs}</label>
        </div>

        {/* <div className="form-floating mb-3">
          <input type="number"
            className="form-control"
            id="caseSlotWith"
            name="caseSlotWith"
            value={graphicsCardData.caseSlotWith}
            onChange={handleChange}
          />
          <label htmlFor="caseSlotWith">{graphicsCardFieldLabels.caseSlotWith}</label>
        </div>

        <div className="form-floating mb-3">
          <input type="number"
            className="form-control"
            id="numberOfFans"
            name="numberOfFans"
            value={graphicsCardData.numberOfFans}
            onChange={handleChange}
          />
          <label htmlFor="numberOfFans">{graphicsCardFieldLabels.numberOfFans}</label>
        </div> */}

        <div className="form-floating mb-3">
          <input type="text"
            className="form-control"
            id="powerConnectors"
            name="powerConnectors"
            value={graphicsCardData.powerConnectors}
            onChange={handleChange}
          />
          <label htmlFor="powerConnectors">{graphicsCardFieldLabels.powerConnectors}</label>
        </div>

        <div className="form-floating mb-3">
          <input type="text"
            className="form-control"
            id="manufacturersWebsite"
            name="manufacturersWebsite"
            value={graphicsCardData.manufacturersWebsite} onChange={handleChange}
          />
          <label htmlFor="manufacturersWebsite">Manufacturer's Website</label>
        </div>

        <div className="form-floating mb-3">
          <textarea className="form-control"
            id="additionalInfo"
            name="additionalInfo"
            value={graphicsCardData.additionalInfo}
            onChange={handleChange}
          />
          <label htmlFor="additionalInfo">Additional Information</label>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
        <button type="button" className="btn btn-secondary ms-2" onClick={clearForm}>Clear</button>
      </form>
    </div>
  );
}

export default GraphicsCardForm;