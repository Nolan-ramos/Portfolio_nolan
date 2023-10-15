import Code from '../../components/about/code/Code';
import Cursor from '../../components/cursor/Cursor';
import Title from '../../components/title/Title';
import './about.scss';

function About() {
    return (
        <div className='about fade-in'>
            <Title title="About" />
            <Code/>
            {/* <Title title="My expertise" /> */}
            <Title title="SKills" />
            <Cursor />
        </div>
    )
}

export default About;
