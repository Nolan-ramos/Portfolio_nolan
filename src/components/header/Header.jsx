import MacButtons from '../mac_buttons/mac_buttons';
import './header.scss';

function Header() {
    return (
        <div className='header'>
            <MacButtons />
            <span className='header_title'>nolan_ramos.app</span>
            <div className='header_fake_button_right'></div>
        </div>
    );
}

export default Header;
