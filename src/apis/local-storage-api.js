import {formatCurrentDate} from "../utils/dateUtil";

const STORAGE_KEY = 'notes';

// 모든 노트 읽기
export const getNotes = () => {
    const notes = localStorage.getItem(STORAGE_KEY);
    return notes ? JSON.parse(notes) : [];
}

// id로 노트 찾기
export const getNote = (id) => {
    const notes = getNotes();
    return notes.find(note => note.id === id);
}


// 여러개의 노트 저장
export const saveNotes = (notes) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
}

// 노트 생성
export const addNote = (note) => {
    const newNote = {
        ...note,
        id : Date.now().toString(),
        lastEdited : formatCurrentDate(),
    }
    const notes = getNotes();
    notes.push(newNote);
    saveNotes(notes);
}

// 노트 수정
export const updateNote = (updatedNote) => {
    const newNote = {
        ...updatedNote,
        lastEdited: formatCurrentDate(),
    }

    const notes = getNotes();
    const updatedNotes = notes.map((note) =>
        note.id === updatedNote.id ? newNote : note
    );
    saveNotes(updatedNotes);
}

// 노트 삭제
export const deleteNote = (id) => {
    const notes = getNotes();
    const updatedNotes = notes.filter((note) => note.id !== id);
    saveNotes(updatedNotes);
}