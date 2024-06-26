import './HomePage.css';
import NoteList from "../components/note/NoteList";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {getNotes} from "../apis/local-storage-api";
import SearchBar from "../components/note/SearchBar";
import {filterNote} from "../utils/filterNote";
import NoteAppTemplate from "../components/common/NoteAppTemplate";
import {fetchNotes} from "../apis/note";



const HomePage = () => {
    const [query, setQuery] = useState('');
    const [notes, setNotes] = useState([]);

    const filteredNotes = filterNote(notes, query);

    const loadData = async (ignore) => {
        const result = await fetchNotes();
        if(!ignore) {
            if(result.code === 1) {
                setNotes(result.data.noteList);
            } else {
                alert(result.message);
            }
        }
    }

    useEffect(() => {
        let ignore = false;
        loadData(ignore);
        return () => {
            ignore = true;
        }

    }, []);

    const handleSearch = (e) => {
        setQuery(e.target.value);
    }

    return (
        <NoteAppTemplate>
            <SearchBar query={query} onChange={handleSearch}/>
            <NoteList notes={filteredNotes}/>
            <Link to='/create' className="create-button">Create Note</Link>
        </NoteAppTemplate>
    );
};

export default HomePage;