import Title from '../../components/title/Title';
import Code from '../../components/about/code/Code';
import './about.scss';

function About() {
    return (
        <div className='about'>
            <Title title="About" />
            <Code/>
            <Title title="My expertise" />
        </div>
    )
}

export default About;
