import NoteAppTemplate from "../components/common/NoteAppTemplate";
import NoteForm from "../components/note/NoteForm";
import {addNote} from "../apis/local-storage-api";
import {Link, useNavigate} from "react-router-dom";
import BackButton from "../components/common/BackButton";

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
        <NoteAppTemplate>
            <BackButton url={'/'}/>
            <NoteForm onSubmit={handleAddNote} isEditing={false}/>
        </NoteAppTemplate>
    );
}

export default CreatePage;