import './App.css';
import EditPage from "./pages/EditPage";
import NoteAppTemplate from "./components/common/NoteAppTemplate";
import {BrowserRouter as Router, Route, Routes, useLocation} from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import CreatePage from "./pages/CreatePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import PrivateRoutes from "./router/PrivateRoutes";
import {AuthProvider} from "./context/AuthProvider";
import Header from "./components/common/Header";


function App() {
    const location = useLocation();
    const isAuthRoute = location.pathname === '/signup' || location.pathname === '/login';

    return (
        <AuthProvider>
            {!isAuthRoute && <Header/>}
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
        </AuthProvider>
    );
}

const AppWrapper = () => {
    return (
        <Router>
            <App/>
        </Router>
    );
}

export default AppWrapper;
