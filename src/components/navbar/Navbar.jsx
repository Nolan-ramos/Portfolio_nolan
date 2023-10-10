import { NavLink } from 'react-router-dom';
import './navbar.scss';

function Navbar() {
    return (
        <nav className='navbar'>
            <ul>
                <li className='navbar_link'>
                    <NavLink exact to="/" activeclassname='active'>_About</NavLink>
                </li>
                <li className='navbar_link'>
                    <NavLink to="/portfolio" activeclassname='active'>_Portfolio</NavLink>
                </li>
                <li className='navbar_link'>
                    <NavLink to="/experience" activeclassname='active'>_Experience</NavLink>
                </li>
                <li className='navbar_link'>
                    <NavLink to="/contact" activeclassname='active'>_Contact</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
