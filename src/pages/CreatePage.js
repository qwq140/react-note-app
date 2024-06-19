import NoteAppTemplate from "../components/NoteAppTemplate";
import NoteForm from "../components/NoteForm";

const CreatePage = () => {
    return (
        <NoteAppTemplate>
            <NoteForm isEditing={false}/>
        </NoteAppTemplate>
    );
}

export default CreatePage;