import { formatDate } from "../utils/dataUtil";
import { uniqueID } from "../utils/idUtil";

const baseUrl = 'http://localhost:3030/data/movies';

export const getAll = async () => {
    const response = await fetch(baseUrl);
    const result = await response.json();

    const data = Object.values(result);

    return data;
};

export const getOne = async (movieId) => {
    const response = await fetch(`${baseUrl}/${movieId}`);
    const result = await response.json();

    return result;
};

export const create = async (data) => {
    const body = {
        _id: uniqueID,
        _ownerId: data.ownerId,
        title: data.title,
        description: data.description,
        img: data.img,
        _createdOn: formatDate(data._createdOn),
        _id: data.id
    };

    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })

    const result = await response.json();
    console.log(result);

    return result;
};

export const remove = async (movieId) => {
    const response = await fetch(`${baseUrl}/${movieId}`, {
        method: 'DELETE'
    });

    const result = await response.json();

    return result;
};