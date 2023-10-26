
import React, { useEffect, useState } from 'react';
import Cursor from '../../components/cursor/Cursor';
import MacButtons from '../../components/mac_buttons/mac_buttons';
import Close from '../../components/portfolio/Close.jsx';
import Folder from '../../components/portfolio/Folder.jsx';
import Open from '../../components/portfolio/Open.jsx';
import Title from '../../components/title/Title';
import './portfolio.scss';
import portfolioData from './portfolioData.json';

// import Css from '../../components/portfolio/Css.jsx';
// import Figma from '../../components/portfolio/Figma.jsx';
// import Javascript from '../../components/portfolio/Javascript.jsx';
// import Vuejs from '../../components/portfolio/Vuejs.jsx';

import fake3 from './img/fake3.jpg';
import fake4 from './img/fake4.jpg';
import fakeSlide from './img/fake_slide.jpg';
import fakeSlidee from './img/fake_slidee.jpg';

function Portfolio() {
    const [selectedLanguage, setSelectedLanguage] = useState(null);
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleLanguageClick = (language) => {
        setSelectedLanguage(language);
        setSelectedProject(null);
    };

    const handleProjectClick = (project) => {
        setSelectedProject(project);
    };

    useEffect(() => {
        if (selectedLanguage && selectedProject && portfolioData.languages[selectedLanguage] && portfolioData.languages[selectedLanguage][selectedProject]) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) =>
                    prevIndex === portfolioData.languages[selectedLanguage][selectedProject].images.length - 1 ? 0 : prevIndex + 1
                );
            }, 2000);
            return () => clearInterval(interval);
        }
    }, [selectedLanguage, selectedProject]);

    return (
        <div className='portfolio fade-in-component'>
            <Title title="Portfolio" />
            <div className='portfolio_container'>
                <div className='portfolio_container_header'>
                    <MacButtons closeUrl='/'/>
                    <span className='portfolio_container_header_title'>_portfolio.app</span>
                </div>
                <div className='portfolio_container_content'>
                    <div className='portfolio_container_content_languages'>
                        <div className='portfolio_container_content_languages_contenu'>
                            {Object.keys(portfolioData.languages).map((language) => (
                                <div
                                    key={language}
                                    onClick={() => handleLanguageClick(language)}
                                    className={`${selectedLanguage === language ? 'language_active cursor_change' : 'cursor_change'}`}
                                    >
                                    {selectedLanguage === language ? (
                                        <span class="open"><Open /></span>
                                    ) : (
                                        <span class="close"><Close /></span>
                                    )}
                                    <p>{language}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='portfolio_container_content_separateur separateur_resp'></div>
                    <div className='portfolio_container_content_projets'>
                        {selectedLanguage && (
                            <div className='portfolio_container_content_projets_contenu'>
                                {Object.keys(portfolioData.languages[selectedLanguage]).map((project) => (
                                    <div
                                        key={project}
                                        onClick={() => handleProjectClick(project)}
                                        className={selectedProject === project ? 'projet_active' : ''}
                                    >
                                        <Folder/>
                                        {/* {selectedLanguage === "JavaScript" && <Javascript />}
                                        {selectedLanguage === "Figma" && <Figma />}
                                        {selectedLanguage === "VueJs" && <Vuejs />}
                                        {selectedLanguage === "CSS" && <Css />} */}
                                        {project}
                                    </div>
                                    
                                ))}
                            </div>
                        )}
                    </div>
                    <div className='portfolio_container_content_separateur'></div>
                    <div className='portfolio_container_content_details'>
                        {selectedProject && (
                            <div className='portfolio_container_content_details_contenu'>
                                <div className='portfolio_container_content_details_contenu_slide'>
                                    {portfolioData.languages[selectedLanguage] && portfolioData.languages[selectedLanguage][selectedProject] && (
                                        <img
                                            className={`portfolio_container_content_details_contenu_slide_image ${currentIndex === 0 ? 'slide-enter' : 'slide-exit'}`}
                                            key={currentIndex}
                                            src={
                                                portfolioData.languages[selectedLanguage][selectedProject].images[currentIndex] === 'fake_slide.jpg'
                                                    ? fakeSlide
                                                    : portfolioData.languages[selectedLanguage][selectedProject].images[currentIndex] === 'fake_slidee.jpg'
                                                    ? fakeSlidee
                                                    : portfolioData.languages[selectedLanguage][selectedProject].images[currentIndex] === 'fake3.jpg'
                                                    ? fake3
                                                    : fake4
                                            }
                                            alt={`project-${selectedProject}-image-${currentIndex}`}
                                        />
                                    )}
                                </div>
                                <div>Text: {portfolioData.languages[selectedLanguage][selectedProject].text}</div>
                                <div>Title: {portfolioData.languages[selectedLanguage][selectedProject].title}</div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Cursor />
        </div>
    );
}

export default Portfolio;