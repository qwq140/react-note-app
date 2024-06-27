import NoteAppTemplate from "../components/common/NoteAppTemplate";
import NoteForm from "../components/note/NoteForm";
import {addNote} from "../apis/local-storage-api";
import {Link, useNavigate} from "react-router-dom";
import BackButton from "../components/common/BackButton";
import {createNote} from "../apis/note";

const CreatePage = () => {
    const navigate = useNavigate();

    const handleAddNote = async (title, content) => {
        const newNote = {
            title,
            content,
        };
        const result = await createNote(newNote);
        if(!result) return;
        if(result.code === 1) {
            navigate('/');
        } else {
            alert(result.message);
        }

    }

    return (
        <NoteAppTemplate>
            <BackButton url={'/'}/>
            <NoteForm onSubmit={handleAddNote} isEditing={false}/>
        </NoteAppTemplate>
    );
}

export default CreatePage;