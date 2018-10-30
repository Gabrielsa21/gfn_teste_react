import { API } from '../path/Api';

export function fetchMyData(path, method, body) {
    return fetch(API.base + path, {
        method: method,
        body: body ? JSON.stringify(body) : null
    }).then(response => response.json());
};