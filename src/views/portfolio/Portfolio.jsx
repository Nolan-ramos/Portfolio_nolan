import React, { useState } from 'react';
import Cursor from '../../components/cursor/Cursor';
import MacButtons from '../../components/mac_buttons/mac_buttons';
import Close from '../../components/portfolio/Close.jsx';
import Folder from '../../components/portfolio/Folder.jsx';
import Open from '../../components/portfolio/Open.jsx';
import Toggle from '../../components/portfolio/Toggle.jsx';
import Title from '../../components/title/Title';
import './portfolio.scss';
import portfolioData from './portfolioData.json';

import fake3 from './img/fake3.jpg';
import fake4 from './img/fake4.jpg';

const images = { fake3, fake4 };

function Portfolio() {
    const [selectedLanguage, setSelectedLanguage] = useState(null);
    const [selectedProject, setSelectedProject] = useState(null);
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);

    const handleLanguageClick = (language) => {
        if (selectedLanguage === language) {
            setIsLanguageOpen(false);
        } else {
            setSelectedLanguage(language);
            setIsLanguageOpen(false);
        }
        setSelectedProject(null);
    };

    const handleProjectClick = (project) => {
        setSelectedProject(project);
        setIsLanguageOpen(false);
    };

    const handleToggleClick = () => {
        setIsLanguageOpen(!isLanguageOpen);
    };

    return (
        <div className='portfolio fade-in-component'>
            <Title title="Portfolio" />
            <div className='portfolio_container'>
                <div className='portfolio_container_header'>
                    <MacButtons closeUrl='/'/>
                    <span className='portfolio_container_header_title'>_portfolio.app</span>
                </div>
                <div className='portfolio_container_content'>
                    <span
                        className='portfolio_container_content_toggle_popup'
                        onClick={handleToggleClick}
                    >
                        <Toggle/>
                    </span>
                    <div className='portfolio_container_content_languages' style={{ left: isLanguageOpen ? '0' : '-100%' }}>
                        <div className='portfolio_container_content_languages_contenu'>
                            {Object.keys(portfolioData.languages).map((language) => (
                                <div
                                    key={language}
                                    onClick={() => handleLanguageClick(language)}
                                    className={`${selectedLanguage === language ? 'language_active cursor_change' : 'cursor_change'}`}
                                >
                                    {selectedLanguage === language ? (
                                        <span className="open"><Open /></span>
                                    ) : (
                                        <span className="close"><Close /></span>
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
                                        <p>{project}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className='portfolio_container_content_separateur'></div>
                    <div className='portfolio_container_content_details'>
                        {selectedProject && (
                            <div className='portfolio_container_content_details_contenu'>
                                <img
                                    className="portfolio_container_content_details_contenu_image"
                                    src={images[portfolioData.languages[selectedLanguage][selectedProject].images]}
                                    alt={`project-${selectedProject}`}
                                />
                                <h3>{portfolioData.languages[selectedLanguage][selectedProject].text}</h3>
                                <p>{portfolioData.languages[selectedLanguage][selectedProject].title}</p>
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
