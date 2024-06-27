import NoteAppTemplate from "../components/common/NoteAppTemplate";
import NoteForm from "../components/note/NoteForm";
import {notes} from "../constants/data";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import BackButton from "../components/common/BackButton";
import {deleteNote, fetchNoteById, updateNote} from "../apis/note";

const EditPage = () => {
    const {id} = useParams();
    const navigator = useNavigate();

    const [note, setNote] = useState({
        id : '',
        title : '',
        content : '',
        updatedAt : '',
    });

    const fetchData = async (ignore) => {
        const result = await fetchNoteById(id);
        if(!ignore) {
            if(result.code === 1) {
                setNote(result.data);
            } else {
                alert(result.message);
            }
        }
    }

    useEffect(() => {
        let ignore = false;
        fetchData(ignore);

        return () => {
            ignore = true;
        }
    }, []);

    const handleSubmit = async (title, content) => {
        const result = await updateNote(id,{
            ...note,
            title,
            content,
        });
        if(!result) return;
        if(result.code === 1) {
            navigator(`/detail/${id}`);
        } else {
            alert(result.message);
        }
    }

    const handleDelete = async () => {
        const result = await deleteNote(id);
        if(result.code === 1) {
            navigator('/');
        } else {
            alert(result.message);
        }
    }

    return (
        <NoteAppTemplate>
            <BackButton url={`/detail/${id}`}/>
            <NoteForm note={note} isEditing={true} onSubmit={handleSubmit} onDelete={handleDelete}/>
        </NoteAppTemplate>
    );
}

export default EditPage;