import React, { useState } from 'react';
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
    const initialIconState = icons.map(() => ({
        isHovered: false,
        direction: { left: '0', top: '0' },
    }));

    const [iconStates, setIconStates] = useState(initialIconState);

    const handleMouseEnter = (index) => {
        const directions = [
            { left: '-150px', top: '-150px' },
            { left: '150px', top: '-150px' },
            { left: '-150px', top: '150px' },
            { left: '150px', top: '150px' },
        ];

        const randomDirection = directions[Math.floor(Math.random() * directions.length)];

        setIconStates((prevState) =>
            prevState.map((iconState, i) =>
                i === index
                    ? {
                          ...iconState,
                          isHovered: true,
                          direction: randomDirection,
                      }
                    : iconState
            )
        );
    };

    const handleMouseLeave = (index) => {
        setTimeout(() => {
            setIconStates((prevState) =>
                prevState.map((iconState, i) =>
                    i === index
                        ? {
                              ...iconState,
                              isHovered: false,
                              direction: { left: '0', top: '0' },
                          }
                        : iconState
                )
            );
        }, 3000);
    };

    return (
        <div className='skills'>
            {icons.map((icon, index) => (
                <div
                    className='skills_content'
                    key={index}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                    style={{
                        position: 'relative',
                        left: iconStates[index].isHovered ? iconStates[index].direction.left : '0',
                        top: iconStates[index].isHovered ? iconStates[index].direction.top : '0',
                        transition: 'left 0.3s ease, top 0.3s ease',
                    }}
                >
                    <icon.component />
                    <span>{icon.text}</span>
                </div>
            ))}
        </div>
    );
}

export default Skills;