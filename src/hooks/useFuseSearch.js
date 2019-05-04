import { useState, useEffect } from 'react';
import {wasteData} from 'assets/wasteData';
import Fuse from 'fuse.js';

const options = {
    shouldSort: true,
    // includeScore: true,
    // includeMatches: true,
    threshold: 0.3,
    location: 0,
    distance: 1000,
    maxPatternLength: 32,
    minMatchCharLength: 0,
    keys: [
        "title",
        "keywords"
    ]
};

const fuse = new Fuse(wasteData, options);

export default function useFuseSearch(query) {
    const [result, setResult] = useState(null);

    useEffect(() => {
        setResult(fuse.search(query));
    }, [query]);

    return result;

}