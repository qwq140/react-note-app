import './HomePage.css';
import NoteList from "../components/NoteList";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {getNotes} from "../apis/local_storage_api";



const HomePage = () => {

    const [notes, setNotes] = useState([]);

    useEffect(() => {
        let ignore = false;
        const fetchNotes = getNotes();
        if(!ignore) {
            setNotes(fetchNotes);
        }
        return () => {
            ignore = true;
        }

    }, []);

    return (
        <>
            <input className="search-input" type="text" placeholder="Search notes..."/>
            <NoteList notes={notes}/>
            <Link to='/create' className="create-button">Create Note</Link>
        </>
    );
};

export default HomePage;