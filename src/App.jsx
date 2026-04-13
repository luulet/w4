import Home from './views/Home.jsx';
import {BrowserRouter, Routes, Route, Link} from "react-router";
import Navigation from './components/Navigation';
import About from './views/About';
import Login from './views/Login';
import Profile from './views/Profile';
import Upload from './views/Upload';
import Single from './views/Single';
const App = () => {
  return (
      <>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/single" element={<Single />} />
          </Routes>

        </BrowserRouter>
      </>
  );
};
export default App;