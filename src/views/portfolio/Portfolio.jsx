import Cursor from '../../components/cursor/Cursor';
import Title from '../../components/title/Title';
import './portfolio.scss';

function Portfolio() {
    return (
        <div className='portfolio fade-in'>
            <Title title="Portfolio" />
            
            <Cursor />
        </div>
    )
}

export default Portfolio;
