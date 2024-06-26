import './NoteDetail.css';
import {Link, useParams} from "react-router-dom";
import {getNote} from "../../apis/local-storage-api";
import {useEffect, useState} from "react";
import BackButton from "../common/BackButton";
const NoteDetail = () => {
    const {id} = useParams();
    const [note, setNote] = useState({
        id : '',
        title : '',
        content : '',
        lastEdited : '',
    });

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
            <BackButton url={'/'}/>
            <h2>{note.title}</h2>
            <div className="note-detail-date">last edited {note.lastEdited}</div>
            <div className="note-detail-content">{note.content}</div>
            <Link to={`/edit/${id}`} className="edit-button">Edit Note</Link>
        </div>
    );
}

export default NoteDetail;