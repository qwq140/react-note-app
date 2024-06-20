import NoteAppTemplate from "../components/NoteAppTemplate";
import NoteForm from "../components/NoteForm";
import {notes} from "../constants/data";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getNote, updateNote} from "../apis/local_storage_api";

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

    return (
        <>
            <NoteForm note={note} isEditing={true} onSubmit={handleSubmit}/>
        </>
    );
}

export default EditPage;