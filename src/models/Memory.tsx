import {initializeProductFields, Product, productFieldLabels} from "./Product";

export interface Memory extends Product {
    manufacturer: string;
    memoryType: string;
    capacity: number;
    modules: string;
    frequency: number;
    casLatency: string;
    heatSpreaderIncluded: boolean;
}

export const memoryFieldLabels: Record<keyof Memory, string> = {
    ...productFieldLabels,

    manufacturer: 'Manufacturer',
    memoryType: 'Memory Type',
    capacity: 'Capacity (GB)',
    modules: 'Modules',
    frequency: 'Frequency (MHz)',
    casLatency: 'CAS Latency',
    heatSpreaderIncluded: 'Heat Spreader Included'
}

export const initializeMemoryFields = (): Memory => ({
    ...initializeProductFields,

    manufacturer: '',
    memoryType: '',
    capacity: 0,
    modules: '',
    frequency: 0,
    casLatency: '',
    heatSpreaderIncluded: false
});

export const generateMemoryTags = (data: Memory) => {
    return `pc gaming,` +
        `memory,` +
        `ram,` +
        `${data.manufacturer},` +
        `${data.memoryType},` +
        `${data.capacity}GB,` +
        `${data.frequency}MHz,` +
        `${data.casLatency},`
}

export const memoryModuleType = [
    '1 x 8GB',
    '2 x 8GB',
    '4 x 8GB',
    '1 x 16GB',
    '2 x 16GB',
    '4 x 16GB',
    '1 x 32GB',
    '2 x 32GB',
    '4 x 32GB',
];

export const memoryTypes = [
    'DDR5',
    'DDR4',
    'DDR3'
];