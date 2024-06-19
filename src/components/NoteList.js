import './NoteList.css';
import {Link} from "react-router-dom";

const NoteList = ({notes}) => {
    return (
        <div className="note-list-container">
            <ul className="note-list">
                {notes.map(note => (
                    <li key={note.id}>
                        <Link to={`/detail/${note.id}`}>{note.title}</Link>
                        <p>last edited {note.lastEdited}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default NoteList;