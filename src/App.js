import './App.css';
import EditPage from "./pages/EditPage";
import NoteAppTemplate from "./components/common/NoteAppTemplate";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import CreatePage from "./pages/CreatePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";


function App() {
  return (
      <div className="app-container">
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/detail/:id" element={<DetailPage/>}/>
                    <Route path="/create" element={<CreatePage/>}/>
                    <Route path="/edit/:id" element={<EditPage/>}/>
                    <Route path="/signup" element={<SignupPage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                </Routes>
            </Router>
      </div>
  );
}

export default App;
