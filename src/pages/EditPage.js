import NoteAppTemplate from "../components/common/NoteAppTemplate";
import NoteForm from "../components/note/NoteForm";
import {notes} from "../constants/data";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {deleteNote, getNote, updateNote} from "../apis/local-storage-api";
import BackButton from "../components/common/BackButton";

const EditPage = () => {
    const {id} = useParams();
    const navigator = useNavigate();

    const [note, setNote] = useState({
        id : '',
        title : '',
        content : '',
        lastEdited : '',
    });

    useEffect(() => {
        let ignore = false;
        const fetchNote = getNote(id);
        if(!ignore) {
            setNote(fetchNote);
        }

        return () => {
            ignore = true;
        }
    }, []);

    const handleSubmit = (title, content) => {
        updateNote({
            ...note,
            title,
            content,
        });
        navigator(`/detail/${id}`);
    }

    const handleDelete = () => {
        deleteNote(id);
        navigator('/');
    }

    return (
        <NoteAppTemplate>
            <BackButton url={`/detail/${id}`}/>
            <NoteForm note={note} isEditing={true} onSubmit={handleSubmit} onDelete={handleDelete}/>
        </NoteAppTemplate>
    );
}

export default EditPage;