import api from "./api";

const ENDPOINT = '/api/v1/note'

export const fetchNotes = async () => {
    try {
        const response = await api.get(`${ENDPOINT}`);
        return response.data;
    } catch (error) {
        if(error.response.data) {
            return error.response.data;
        }
        alert(error);
    }
}

export const fetchNoteById = async (id) => {
    try {
        const response = await api.get(`${ENDPOINT}/${id}`);
        return response.data;
    } catch (error) {
        if(error.response.data) {
            return error.response.data;
        }
        alert(error);
    }
}

export const createNote = async (noteData) => {
    try {
        const response = await api.post(`${ENDPOINT}`, noteData);
        return response.data;
    } catch (error) {
        if(error.response.data) {
            return error.response.data;
        }
        alert(error);
    }
}

export const updateNote = async (id, noteData) => {
    try {
        const response = await api.put(`${ENDPOINT}/${id}`, noteData);
        return response.data;
    } catch (error) {
        if(error.response.data) {
            return error.response.data;
        }
        alert(error);
    }
}

export const deleteNote = async (id) => {
    try {
        const response = await api.delete(`${ENDPOINT}/${id}`);
        return response.data;
    } catch (error) {
        if(error.response.data) {
            return error.response.data;
        }
        alert(error);
    }
}