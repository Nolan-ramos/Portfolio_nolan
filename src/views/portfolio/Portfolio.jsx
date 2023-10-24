import React, { useState } from 'react';
import Cursor from '../../components/cursor/Cursor';
import MacButtons from '../../components/mac_buttons/mac_buttons';
import Title from '../../components/title/Title';
import './portfolio.scss';
import portfolioData from './portfolioData.json';

function Portfolio() {
    const [selectedLanguage, setSelectedLanguage] = useState(null);
    const [selectedProject, setSelectedProject] = useState(null);

    const handleLanguageClick = (language) => {
        setSelectedLanguage(language);
        setSelectedProject(null);
    };

    const handleProjectClick = (project) => {
        setSelectedProject(project);
    };

    return (
        <div className='portfolio fade-in-component'>
        <Title title="Portfolio" />
        <div className='portfolio_container'>
            <div className='portfolio_container_header'>
                <MacButtons closeUrl="/"/>
                <span className='portfolio_container_header_title'>_portfolio.app</span>
            </div>
            <div className='portfolio_container_content'>
                <div className="portfolio_container_content_languages">
                    <div>
                        {Object.keys(portfolioData.languages).map((language) => (
                            <div key={language} onClick={() => handleLanguageClick(language)}>
                                {language}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="portfolio_container_content_separateur"></div>
                <div className="portfolio_container_content_projets">
                {selectedLanguage && (
                    <div className="portfolio_container_content_projets_contenu">
                        {Object.keys(portfolioData.languages[selectedLanguage]).map((project) => (
                            <div key={project} onClick={() => handleProjectClick(project)}>
                            {project}
                            </div>
                        ))}
                    </div>
                )}
                </div>
                <div className="portfolio_container_content_separateur"></div>
                <div className="portfolio_container_content_details">
                {selectedProject && (
                    <div className='portfolio_container_content_details_contenu'>
                        <div>Title: {portfolioData.languages[selectedLanguage][selectedProject].title}</div>
                            <div>
                                Images:
                                {portfolioData.languages[selectedLanguage][selectedProject].images.map((image, index) => (
                                <img key={index} src={image} alt={`project-${selectedProject}-image-${index}`} />
                                ))}
                            </div>
                        <div>Text: {portfolioData.languages[selectedLanguage][selectedProject].text}</div>
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
