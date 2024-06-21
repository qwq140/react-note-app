import './HomePage.css';
import NoteList from "../components/NoteList";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {getNotes} from "../apis/local_storage_api";
import SearchBar from "../components/SearchBar";
import {filterNote} from "../utils/filterNote";



const HomePage = () => {
    const [query, setQuery] = useState('');
    const [notes, setNotes] = useState([]);

    const filteredNotes = filterNote(notes, query);

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

    const handleSearch = (e) => {
        setQuery(e.target.value);
    }

    return (
        <>
            <SearchBar query={query} onChange={handleSearch}/>
            <NoteList notes={filteredNotes}/>
            <Link to='/create' className="create-button">Create Note</Link>
        </>
    );
};

export default HomePage;