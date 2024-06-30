import { ChangeEvent, FC, FormEvent, useState } from "react";

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

// just like ProcessorForm.tsx, but for Graphics Cards
interface GraphicsCardCaptureFormProps {
  onSubmit: (data: GraphicsCard) => void;
  onClear: () => void;
}

const GraphicsCardForm: FC<GraphicsCardCaptureFormProps> = ({ onSubmit, onClear }) =>  {
  const initialState = {
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
    manufacturer: '',
  };

  const [graphicsCardData, setGraphicsCard] = useState<GraphicsCard>(initialState);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setGraphicsCard((prevGraphicsCard) => ({
      ...prevGraphicsCard,
      [name]: value,
    }));
  };

  const clearForm = () => {
    setGraphicsCard(initialState);
    onClear();
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(graphicsCardData);
  };

  return (
    <div className="container mt-5">
      <h2>Graphics Card (GPU)</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="productName" name="productName" value={graphicsCardData.productName} onChange={handleChange} required />
          <label htmlFor="productName">Product Name</label>
        </div>
        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="chipset" name="chipset" value={graphicsCardData.chipset} onChange={handleChange} required />
          <label htmlFor="chipset">Chipset</label>
        </div>
        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="memory" name="memory" value={graphicsCardData.memory} onChange={handleChange} required />
          <label htmlFor="memory">Memory</label>
        </div>
        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="coreClock" name="coreClock" value={graphicsCardData.coreClock} onChange={handleChange} required />
          <label htmlFor="coreClock">Core Clock</label>
        </div>
        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="boostClock" name="boostClock" value={graphicsCardData.boostClock} onChange={handleChange} required />
          <label htmlFor="boostClock">Boost Clock</label>
        </div>
        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="tdp" name="tdp" value={graphicsCardData.tdp} onChange={handleChange} required />
          <label htmlFor="tdp">TDP</label>
        </div>
        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="outputs" name="outputs" value={graphicsCardData.outputs} onChange={handleChange} required />
          <label htmlFor="outputs">Outputs</label>
        </div>
        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="length" name="length" value={graphicsCardData.length} onChange={handleChange} required />
          <label htmlFor="length">Length</label>
        </div>
        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="powerConnectors" name="powerConnectors" value={graphicsCardData.powerConnectors} onChange={handleChange} required />
          <label htmlFor="powerConnectors">Power Connectors</label>
        </div>
        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="manufacturer" name="manufacturer" value={graphicsCardData.manufacturer} onChange={handleChange} required />
          <label htmlFor="manufacturer">Manufacturer</label>
        </div>
        <div className="form-floating mb-3">
          <input type="url" className="form-control" id="manufacturersWebsite" name="manufacturersWebsite" value={graphicsCardData.manufacturersWebsite} onChange={handleChange} />
          <label htmlFor="manufacturersWebsite">Manufacturer's Website</label>
        </div>
        <div className="form-floating mb-3">
          <textarea className="form-control" id="additionalInfo" name="additionalInfo" value={graphicsCardData.additionalInfo} onChange={handleChange} />
          <label htmlFor="additionalInfo">Additional Information</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <button type="button" className="btn btn-secondary ms-2" onClick={clearForm}>Clear</button>
      </form>
    </div>
  );
}

export default GraphicsCardForm;