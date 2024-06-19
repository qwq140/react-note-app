import NoteAppTemplate from "../components/NoteAppTemplate";
import NoteForm from "../components/NoteForm";
import {addNote} from "../apis/local_storage_api";
import {useNavigate} from "react-router-dom";

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
            <NoteForm onSubmit={handleAddNote} isEditing={false}/>
        </>
    );
}

export default CreatePage;