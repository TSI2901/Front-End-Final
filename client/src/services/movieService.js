import * as request from "../lib/requests";

const baseUrl = 'http://localhost:3030/data/movies'

export const getAll = async () => {
    const response = await fetch(baseUrl);
    const result = await response.json();

    const data = Object.values(result);

    return data;
};

export const getAllByOwner = async (ownerId) => {
    const all = await getAll();

    return all.filter(movie => movie._ownerId === ownerId)
}

export const getOne = async (movieId) => {
    const response = await fetch(`${baseUrl}/${movieId}`);
    const result = await response.json();

    return result;
}


export const create = async (movieData) => {
    const result = await request.post(baseUrl, movieData);

    return result;
};

export const edit = async (movieId, movieData) => {
    const result = await request.put(`${baseUrl}/${movieId}`, movieData);

    return result;
};

export const remove = async (movieId) => request.remove(`${baseUrl}/${movieId}`);