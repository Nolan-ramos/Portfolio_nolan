import { NavLink } from 'react-router-dom';
import './navbar.scss';

function Navbar() {
    return (
        <nav className='navbar'>
            <ul>
                <li className='navbar_link'>
                    <NavLink exact to="/" activeClassName='active'>_About</NavLink>
                </li>
                <li className='navbar_link'>
                    <NavLink to="/portfolio" activeClassName='active'>_Portfolio</NavLink>
                </li>
                <li className='navbar_link'>
                    <NavLink to="/experience" activeClassName='active'>_Experience</NavLink>
                </li>
                <li className='navbar_link'>
                    <NavLink to="/contact" activeClassName='active'>_Contact</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
