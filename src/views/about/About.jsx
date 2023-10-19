import Code from '../../components/about/code/Code';
import Skills from '../../components/about/skills/Skills';
import Expertise from '../../components/about/expertise/Expertise';
import Cursor from '../../components/cursor/Cursor';
import Title from '../../components/title/Title';
import RowRight from '../../components/experience/RowRight';
import './about.scss';

function About() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <div className='about fade-in'>
            <Title title="A_propos" />
            <Code/>
            <Title title="Mes_expertises" />
            <Expertise/>
            <Title title="Mes_compétences" />
            <Skills/>
            <Cursor />
            <div className="about_to_top" onClick={scrollToTop}>
                <RowRight />
            </div>
        </div>
    );
}

export default About;
