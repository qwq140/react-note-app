import NoteAppTemplate from "../components/NoteAppTemplate";
import NoteForm from "../components/NoteForm";
import {addNote} from "../apis/local-storage-api";
import {Link, useNavigate} from "react-router-dom";
import BackButton from "../components/BackButton";

const CreatePage = () => {
    const navigate = useNavigate();

    const handleAddNote = (title, content) => {
        const newNote = {
            title,
            content,
        };
        addNote(newNote);
        navigate('/');
    }

    return (
        <>
            <BackButton url={'/'}/>
            <NoteForm onSubmit={handleAddNote} isEditing={false}/>
        </>
    );
}

export default CreatePage;