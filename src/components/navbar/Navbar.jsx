import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                <Link to="/">À propos</Link>
                </li>
                <li>
                <Link to="/contact">Contact</Link>
                </li>
                <li>
                <Link to="/experience">Expérience</Link>
                </li>
                <li>
                <Link to="/portfolio">Portfolio</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
