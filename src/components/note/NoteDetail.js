import './NoteDetail.css';
import {Link, useNavigate, useParams} from "react-router-dom";
import {getNote} from "../../apis/local-storage-api";
import {useEffect, useState} from "react";
import BackButton from "../common/BackButton";
import {fetchNoteById} from "../../apis/note";
import {formatDate} from "../../utils/dateUtil";
const NoteDetail = () => {
    const {id} = useParams();
    const [note, setNote] = useState({
        id : '',
        title : '',
        content : '',
        updatedAt : '',
    });

    const fetchData = async (ignore) => {
        const result = await fetchNoteById(id);
        if(!result) return;
        if(!ignore) {
            if(result.code === 1) {
                setNote(result.data);
            } else {
                alert(result.message);
            }

        }
    }

    useEffect(() => {
        let ignore = false;
        fetchData(ignore);

        return () => {
            ignore = true;
        }
    }, []);

    return (
        <div className="note-detail">
            <BackButton url={'/'}/>
            <h2>{note.title}</h2>
            <div className="note-detail-date">last edited {formatDate(note.updatedAt)}</div>
            <div className="note-detail-content">{note.content}</div>
            <Link to={`/edit/${id}`} className="edit-button">Edit Note</Link>
        </div>
    );
}

export default NoteDetail;