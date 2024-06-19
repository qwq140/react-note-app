import './HomePage.css';
import NoteList from "../components/NoteList";
import NoteAppTemplate from "../components/NoteAppTemplate";
import {notes} from "../constants/data";



const HomePage = () => {
    return (
        <NoteAppTemplate>
            <input className="search-input" type="text" placeholder="Search notes..."/>
            <NoteList notes={notes}/>
            <div className="create-button">Create Note</div>
        </NoteAppTemplate>
    );
};

export default HomePage;