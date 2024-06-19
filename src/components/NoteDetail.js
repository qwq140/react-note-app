import './NoteDetail.css';
import {Link, useParams} from "react-router-dom";
import {getNote} from "../apis/local_storage_api";
import {useEffect, useState} from "react";
const NoteDetail = () => {
    const {id} = useParams();
    const [note, setNote] = useState(null);

    useEffect(() => {
        let ignore = false;
        const fetchNote = getNote(id);
        if(!ignore) {
            setNote(fetchNote);
        }

        return () => {
            ignore = true;
        }
    }, []);

    return (
        <div className="note-detail">
            <Link to={'/'} className="back-button">Back</Link>
            <h2>{note.title}</h2>
            <p>last edited {note.lastEdited}</p>
            <p>{note.content}</p>
            <Link to={`/edit/${id}`} className="edit-button">Edit Note</Link>
        </div>
    );
}

export default NoteDetail;