import data from './waste_data.json';

export const wasteData = (data || []).map((v, k) => (
    {
        ...v,
        id: k
    }
));