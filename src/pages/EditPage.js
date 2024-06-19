import NoteAppTemplate from "../components/NoteAppTemplate";
import NoteForm from "../components/NoteForm";
import {notes} from "../constants/data";
import {useParams} from "react-router-dom";

const EditPage = () => {
    const {id} = useParams();

    const note = notes.find(note => note.id === parseInt(id));

    return (
        <>
            <NoteForm note={note} isEditing={false}/>
        </>
    );
}

export default EditPage;