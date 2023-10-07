import Close from '../../assets/close.svg';
import Expand from '../../assets/expand.svg';
import Subtract from '../../assets/subtract.svg';
import './header.scss';

function Header() {
    return (
        <div className='header'>
            <div className='header_fake_button_left'>
                <span><img src={Close}/></span>
                <span><img src={Subtract}/></span>
                <span><img src={Expand}/></span>
            </div>
            <span className='header_title'>nolan_ramos.app</span>
            <div className='header_fake_button_right'></div>
        </div>
    );
}

export default Header;
