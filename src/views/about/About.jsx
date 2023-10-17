import Code from '../../components/about/code/Code';
import Skills from '../../components/about/skills/Skills';
import Cursor from '../../components/cursor/Cursor';
import Title from '../../components/title/Title';
import './about.scss';

function About() {
    return (
        <div className='about fade-in'>
            <Title title="About" />
            <Code/>
            {/* <Title title="My expertise" /> */}
            <Title title="Skills" />
            <Skills/>
            <Cursor />
        </div>
    )
}

export default About;
