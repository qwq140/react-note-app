import {notes} from "../constants/data";
import './NoteDetail.css';
const NoteDetail = () => {
    const note = notes[0];

    return (
        <div className="note-detail">
            <a className="back-button">Back</a>
            <h2>{note.title}</h2>
            <p>last edited {note.lastEdited}</p>
            <p>{note.content}</p>
            <a className="edit-button">Edit Note</a>
        </div>
    );
}

export default NoteDetail;