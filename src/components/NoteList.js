import './NoteList.css';

const NoteList = ({notes}) => {
    return (
        <div className="note-list-container">
            <ul className="note-list">
                {notes.map(note => (
                    <li key={note.id}>
                        <a href="#">{note.title}</a>
                        <p>last edited {note.lastEdited}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default NoteList;