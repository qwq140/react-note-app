import './App.css';
import EditPage from "./pages/EditPage";
import NoteAppTemplate from "./components/common/NoteAppTemplate";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import CreatePage from "./pages/CreatePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import PrivateRoutes from "./router/PrivateRoutes";
import {AuthProvider} from "./context/AuthProvider";


function App() {
  return (
      <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/signup" element={<SignupPage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route element={<PrivateRoutes/>}>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/detail/:id" element={<DetailPage/>}/>
                        <Route path="/create" element={<CreatePage/>}/>
                        <Route path="/edit/:id" element={<EditPage/>}/>
                    </Route>
                </Routes>
            </Router>
      </AuthProvider>
  );
}

export default App;
