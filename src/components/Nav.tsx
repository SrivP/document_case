import { NavLink } from "react-router";

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-list">
        <NavLink to="/" className="nav-item" end>
          Home
        </NavLink>
        <NavLink to="/about" className="nav-item">
          About
        </NavLink>
        <NavLink to="/projects" className="nav-item">
          Projects
        </NavLink>
      </div>
    </nav>
  );
}
