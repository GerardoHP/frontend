import axios from "axios";

export const getBaths = () => {
    return axios.get('http://localhost:8001/baths');
}

export const getTypes = () => {
    return axios.get('http://localhost:8001/types');
}

export const getLocations = (params) => {
    if (!params.baths) {
        delete params.baths;
    }
    if (!params.types) {
        delete params.types;
    }
    return axios.get('http://localhost:8001/locations', { params });
}
