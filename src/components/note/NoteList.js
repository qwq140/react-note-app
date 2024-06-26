import './NoteList.css';
import {Link} from "react-router-dom";

const NoteList = ({notes}) => {
    return (
        <>
            <ul className="note-list">
                {notes.map(note => (
                    <Link to={`/detail/${note.id}`} key={note.id} className="note-item">
                        <h2>{note.title}</h2>
                        <p>last edited {note.lastEdited}</p>
                    </Link>
                ))}
            </ul>
        </>
    )
}

export default NoteList;