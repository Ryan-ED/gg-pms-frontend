import { ChangeEvent, FC, FormEvent, useState } from "react";
import { GraphicsCard, initializeGraphicsCardFields } from "../models/GraphicsCard";

// just like ProcessorForm.tsx, but for Graphics Cards
interface GraphicsCardCaptureFormProps {
  onSubmit: (data: GraphicsCard) => void;
  onClear: () => void;
}

const GraphicsCardForm: FC<GraphicsCardCaptureFormProps> = ({ onSubmit, onClear }) =>  {

  const [graphicsCardData, setGraphicsCard] = useState<GraphicsCard>(initializeGraphicsCardFields());

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    onSubmit(graphicsCardData);
  };

  return (
    <div className="container mt-5">
      <h2>Graphics Card (GPU)</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="productName" name="productName" value={graphicsCardData.productName} onChange={handleChange} />
          <label htmlFor="productName">Product Name</label>
        </div>
        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="chipset" name="chipset" value={graphicsCardData.chipset} onChange={handleChange} />
          <label htmlFor="chipset">Chipset</label>
        </div>
        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="memory" name="memory" value={graphicsCardData.memory} onChange={handleChange} />
          <label htmlFor="memory">Memory</label>
        </div>
        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="coreClock" name="coreClock" value={graphicsCardData.coreClock} onChange={handleChange} />
          <label htmlFor="coreClock">Core Clock</label>
        </div>
        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="boostClock" name="boostClock" value={graphicsCardData.boostClock} onChange={handleChange} />
          <label htmlFor="boostClock">Boost Clock</label>
        </div>
        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="tdp" name="tdp" value={graphicsCardData.tdp} onChange={handleChange} />
          <label htmlFor="tdp">TDP</label>
        </div>
        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="outputs" name="outputs" value={graphicsCardData.outputs} onChange={handleChange} />
          <label htmlFor="outputs">Outputs</label>
        </div>
        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="length" name="length" value={graphicsCardData.length} onChange={handleChange} />
          <label htmlFor="length">Length</label>
        </div>
        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="powerConnectors" name="powerConnectors" value={graphicsCardData.powerConnectors} onChange={handleChange} />
          <label htmlFor="powerConnectors">Power Connectors</label>
        </div>
        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="manufacturer" name="manufacturer" value={graphicsCardData.manufacturer} onChange={handleChange} />
          <label htmlFor="manufacturer">Manufacturer</label>
        </div>
        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="manufacturersWebsite" name="manufacturersWebsite" value={graphicsCardData.manufacturersWebsite} onChange={handleChange} />
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