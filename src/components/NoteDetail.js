import {notes} from "../constants/data";
import './NoteDetail.css';
import {Link, useParams} from "react-router-dom";
const NoteDetail = () => {
    const {id} = useParams();
    const note = notes.find(note => note.id === parseInt(id));

    return (
        <div className="note-detail">
            <a className="back-button">Back</a>
            <h2>{note.title}</h2>
            <p>last edited {note.lastEdited}</p>
            <p>{note.content}</p>
            <Link to={`/edit/${id}`} className="edit-button">Edit Note</Link>
        </div>
    );
}

export default NoteDetail;