import api from "./api";

const ENDPOINT = '/api/v1/note'

export const fetchNotes = async () => {
    try {
        const response = await api.get(`${ENDPOINT}`);
        return response.data;
    } catch (error) {
        alert(error);
    }
}

export const fetchNoteById = async (id) => {
    try {
        const response = await api.get(`${ENDPOINT}/${id}`);
        return response.data;
    } catch (error) {
        alert(error)
    }
}