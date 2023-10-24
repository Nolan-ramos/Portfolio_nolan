import Code from '../../components/about/code/Code';
import Expertise from '../../components/about/expertise/Expertise';
import Skills from '../../components/about/skills/Skills';
import Cursor from '../../components/cursor/Cursor';
import RowRight from '../../components/experience/RowRight';
import Title from '../../components/title/Title';
import './about.scss';

function About() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <div className='about fade-in-component'>
            <Title title="A_propos" />
            <Code/>
            <Title title="Mes_expertises" />
            <Expertise/>
            <Title title="Mes_compétences" />
            <Skills/>
            <Cursor />
            <a className="about_to_top" onClick={scrollToTop}>
                <RowRight />
            </a>
        </div>
    );
}

export default About;
