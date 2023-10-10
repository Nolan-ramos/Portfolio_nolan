import Close from '../../assets/close.svg';
import Expand from '../../assets/expand.svg';
import Subtract from '../../assets/subtract.svg';
import './mac_buttons.scss';

function Header() {
    return (
        <div className='mac_buttons'>
            <span><img src={Close}/></span>
            <span><img src={Subtract}/></span>
            <span><img src={Expand}/></span>
        </div>
    );
}

export default Header;