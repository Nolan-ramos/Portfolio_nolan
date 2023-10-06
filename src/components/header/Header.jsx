import './header.scss';

function Header() {
    return (
        <div className='header'>
            <div className='header_fake_button_left'>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <span className='header_title'>nolan_ramos.app</span>
            <div className='header_fake_button_right'></div>
        </div>
    );
}

export default Header;
