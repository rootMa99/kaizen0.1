import { NavLink } from "react-router-dom";
import c from "./NavBar.module.css";
import imglogo from "../../assets/aptiv-logo.svg";

const NavBar = (p) => {
  return (
    <div className={c.navBar}>
      <div className={c.logo}>
        <NavLink to="/home">
          <img src={imglogo} alt="logo for aptiv" />
        </NavLink>
      </div>

      <div className={c.links}>
        <ul>
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) => (isActive ? c.activeLink : c.link)}
            >
              home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/validation"
              className={({ isActive }) => (isActive ? c.activeLink : c.link)}
            >
              validation
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/download"
              className={({ isActive }) => (isActive ? c.activeLink : c.link)}
            >
              download
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/analytics"
              className={({ isActive }) => (isActive ? c.activeLink : c.link)}
            >
              analytics
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default NavBar;
