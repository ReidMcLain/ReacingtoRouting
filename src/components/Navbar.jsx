import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <h1>
                <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active bg-danger' : ''}`}>Home</NavLink>
                <NavLink to="/people" className={({ isActive }) => `nav-link ${isActive ? 'active bg-danger' : ''}`}>People</NavLink>
                <NavLink to="/films" className={({ isActive }) => `nav-link ${isActive ? 'active bg-danger' : ''}`}>Films</NavLink>
            </h1>
        </div>
    );
}

export default NavBar;