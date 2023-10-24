import { Link } from 'react-router-dom';
import Close from '../../assets/close.svg';
import Expand from '../../assets/expand.svg';
import Subtract from '../../assets/subtract.svg';
import './mac_buttons.scss';

function MacButtons(props) {
    const { closeUrl } = props;
    
    return (
        <div className='mac_buttons'>
            <Link to={closeUrl}>
                <img src={Close} alt="Close" />
            </Link>
            <span><img src={Subtract} alt="Subtract" /></span>
            <span><img src={Expand} alt="Expand" /></span>
        </div>
    );
}

export default MacButtons;