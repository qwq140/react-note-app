import NoteAppTemplate from "../components/NoteAppTemplate";
import NoteForm from "../components/NoteForm";
import {notes} from "../constants/data";

const EditPage = () => {

    const note = notes[0];

    return (
        <NoteAppTemplate>
            <NoteForm note={note} isEditing={false}/>
        </NoteAppTemplate>
    );
}

export default EditPage;