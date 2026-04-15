import Home from './views/Home.jsx';
import {BrowserRouter, Routes, Route, Link} from "react-router";
import Navigation from './components/Navigation';
import About from './views/About';
import Login from './views/Login';
import Profile from './views/Profile';
import Upload from './views/Upload';
import Single from './views/Single';
import Logout from "./views/Logout.jsx";
const App = () => {
  return (
      <>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/single" element={<Single />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>

        </BrowserRouter>
      </>
  );
};
export default App;
