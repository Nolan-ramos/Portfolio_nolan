import React, { useState } from 'react';
import Cursor from '../../components/cursor/Cursor';
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
        <div className='portfolio fade-in'>
        <Title title="Portfolio" />

        <div className="language-container">
            {Object.keys(portfolioData.languages).map((language) => (
            <div key={language} onClick={() => handleLanguageClick(language)}>
                {language}
            </div>
            ))}
        </div>

        {selectedLanguage && (
            <div className="project-container">
            {Object.keys(portfolioData.languages[selectedLanguage]).map((project) => (
                <div key={project} onClick={() => handleProjectClick(project)}>
                {project}
                </div>
            ))}
            </div>
        )}

        {selectedProject && (
            <div className="details-container">
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

        <Cursor />
        </div>
    );
}

export default Portfolio;
