import {Link, Route, Routes} from "react-router";
import Home from "../views/Home.jsx";

const Navigation = () => {
  return (
    <>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/Profile">Profile</Link></li>
        <li><Link to="/Upload">Upload</Link></li>
        <li><Link to="/Login">Login</Link></li>
        <li><Link to="/Logout">Logout</Link></li>
      </ul>
    </>
  );
};

export default Navigation;
