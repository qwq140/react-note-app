import './HomePage.css';
import NoteList from "../components/NoteList";
import NoteAppTemplate from "../components/NoteAppTemplate";
import {notes} from "../constants/data";
import {Link} from "react-router-dom";



const HomePage = () => {
    return (
        <>
            <input className="search-input" type="text" placeholder="Search notes..."/>
            <NoteList notes={notes}/>
            <Link to='/create' className="create-button">Create Note</Link>
        </>
    );
};

export default HomePage;