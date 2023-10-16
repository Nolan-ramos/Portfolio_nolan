import './skills.scss';
import Css from './svg/Css';
import Figma from './svg/Figma';
import Git from './svg/Git';
import Html from './svg/Html';
import Javascript from './svg/Javascript';
import Nodejs from './svg/Nodejs';
import Php from './svg/Php';
import Reactjs from './svg/Reactjs';
import Sass from './svg/Sass';
import Sql from './svg/Sql';
import Vuejs from './svg/Vuejs';

const icons = [
    { component: Reactjs, text: 'React.js' },
    { component: Vuejs, text: 'Vue.js' },
    { component: Javascript, text: 'Javascript' },
    { component: Html, text: 'Html' },
    { component: Css, text: 'Css' },
    { component: Php, text: 'Php' },
    { component: Nodejs, text: 'Nodejs' },
    { component: Sql, text: 'Sql' },
    { component: Sass, text: 'Sass' },
    { component: Figma, text: 'Figma' },
    { component: Git, text: 'Git' },
];

function Skills() {
    return (
        <div className='skills'>
            {icons.map((icon, index) => (
                <div className='skills_content' key={index}>
                    <icon.component />
                    <span>{icon.text}</span>
                </div>
            ))}
        </div>
    );
}

export default Skills;