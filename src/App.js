import './App.css';
import EditPage from "./pages/EditPage";
import NoteAppTemplate from "./components/NoteAppTemplate";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import CreatePage from "./pages/CreatePage";


function App() {
  return (
      <div className="app-container">
        <NoteAppTemplate>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/detail/:id" element={<DetailPage/>}/>
                    <Route path="/create" element={<CreatePage/>}/>
                    <Route path="/edit/:id" element={<EditPage/>}/>
                </Routes>
            </Router>
        </NoteAppTemplate>
      </div>
  );
}

export default App;
