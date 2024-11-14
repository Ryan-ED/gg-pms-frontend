import {productFieldLabels, ProductType} from "../models/Product";
import {initializeMemoryFields, Memory, memoryFieldLabels, memoryModuleType, memoryTypes} from "../models/Memory";
import React, {useState} from "react";

interface MemoryCaptureFormProps {
    onSubmit: (data: Memory, productType: ProductType) => void;
    onClear: () => void;
}

const MemoryCaptureForm: React.FC<MemoryCaptureFormProps> = ({ onSubmit, onClear }) => {
    const [memoryData, setMemoryData] = useState<Memory>(initializeMemoryFields());

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setMemoryData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const clearForm = () => {
        setMemoryData(initializeMemoryFields());
        onClear();
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(memoryData, ProductType.Memory);
    };

    return (
        <div className="container mt-5">
            <h2>Memory (RAM)</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="productName"
                        name="productName"
                        value={memoryData.productName}
                        onChange={handleChange}
                    />
                    <label htmlFor="productName">
                        {productFieldLabels.productName}
                    </label>
                </div>

                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="manufacturer"
                        name="manufacturer"
                        value={memoryData.manufacturer}
                        onChange={handleChange}
                    />
                    <label htmlFor="manufacturer">
                        {memoryFieldLabels.manufacturer}
                    </label>
                </div>

                <div className="form-floating mb-3">
                    <select
                        className="form-select"
                        id="memoryType"
                        name="memoryType"
                        value={memoryData.memoryType}
                        onChange={handleChange}
                    >
                        <option value="">Select Memory Type</option>
                        {memoryTypes.map((type) => (
                            <option key={type} value={type}>
                                {type}
                            </option>
                        ))}
                    </select>
                    <label htmlFor="memoryType">
                        {memoryFieldLabels.memoryType}
                    </label>
                </div>

                <div className="form-floating mb-3">
                    <input
                        type="number"
                        className="form-control"
                        id="capacity"
                        name="capacity"
                        value={memoryData.capacity}
                        onChange={handleChange}
                    />
                    <label htmlFor="capacity">
                        {memoryFieldLabels.capacity}
                    </label>
                </div>

                <div className="form-floating mb-3">
                    <select
                        className="form-select"
                        id="modules"
                        name="modules"
                        value={memoryData.modules}
                        onChange={handleChange}
                    >
                        <option value="">Select Module Configuration</option>
                        {memoryModuleType.map((type) => (
                            <option key={type} value={type}>
                                {type}
                            </option>
                        ))}
                    </select>
                    <label htmlFor="modules">
                        {memoryFieldLabels.modules}
                    </label>
                </div>

                <div className="form-floating mb-3">
                    <input
                        type="number"
                        className="form-control"
                        id="frequency"
                        name="frequency"
                        value={memoryData.frequency}
                        onChange={handleChange}
                    />
                    <label htmlFor="frequency">
                        {memoryFieldLabels.frequency}
                    </label>
                </div>

                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="casLatency"
                        name="casLatency"
                        value={memoryData.casLatency}
                        onChange={handleChange}
                    />
                    <label htmlFor="casLatency">
                        {memoryFieldLabels.casLatency}
                    </label>
                </div>

                <div className="form-check form-switch mb-3">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="heatSpreaderIncluded"
                        name="heatSpreaderIncluded"
                        value={memoryData.heatSpreaderIncluded ? "Yes" : "No"}
                        onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="heatSpreaderIncluded">
                        {memoryFieldLabels.heatSpreaderIncluded}
                    </label>
                </div>

                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="manufacturersWebsite"
                        name="manufacturersWebsite"
                        value={memoryData.manufacturersWebsite}
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
                        value={memoryData.additionalInfo}
                        onChange={handleChange}
                    />
                    <label htmlFor="additionalInfo">
                        {productFieldLabels.additionalInfo}
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
                <button type="button" className="btn btn-secondary ms-2" onClick={clearForm}>
                    Clear
                </button>
            </form>
        </div>
    );
}

export default MemoryCaptureForm;