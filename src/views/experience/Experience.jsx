import { useState } from 'react';
import Cursor from '../../components/cursor/Cursor';
import MacButtons from '../../components/mac_buttons/mac_buttons';
import Title from '../../components/title/Title';
import './experience.scss';
import experienceData from './experienceData.json';

function Experience() {
    const [activeSubcategory, setActiveSubcategory] = useState(null);

    const handleSubcategoryClick = (subcategoryData) => {
        if (activeSubcategory === subcategoryData) {
            setActiveSubcategory(null);
        } else {
            // Réinitialisez l'état de la sous-catégorie active à null
            setActiveSubcategory(null);
            // Attendez un court instant pour que la désactivation se produise avant de réactiver
            setTimeout(() => {
                setActiveSubcategory(subcategoryData);
            }, 0);
        }
    };

    return (
        <div className='experience fade-in'>
            <Title title="Experience" />
            <div className='experience_container'>
                <div className='experience_header'>
                    <MacButtons />
                    <span className='experience_header_title'>_experience.app</span>
                </div>
                <div className='experience_content'>
                    <div className='experience_content_accordeon'>
                        {experienceData.map((categoryData, categoryIndex) => (
                            <div key={categoryIndex} className={categoryData.category}>
                                <button className='experience_content_accordeon_title_category'>{categoryData.category}</button>
                                <div>
                                    {categoryData.subcategories.map((subcategoryData, subcategoryIndex) => (
                                        <div key={subcategoryIndex} className={subcategoryData.title}>
                                            <button
                                                onClick={() => handleSubcategoryClick(subcategoryData)}
                                                className={`experience_content_accordeon_title_subcategory ${
                                                    activeSubcategory === subcategoryData ? 'active' : ''
                                                }`}
                                            >
                                                {subcategoryData.title}
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="experience_content_contenu">
                        {activeSubcategory && (
                            <div className="fade-in">
                                <h3>{activeSubcategory.title}</h3>
                                {activeSubcategory.contents.map((content, contentIndex) => (
                                    <div key={contentIndex} className={activeSubcategory ? 'active' : ''}>
                                        {content.text && <p>{content.text}</p>}
                                        {content.words && (
                                            <ul>
                                                {content.words.map((word, wordIndex) => (
                                                    <li key={wordIndex}>{word}</li>
                                                ))}
                                            </ul>
                                        )}
                                        {content.number && <p>{content.number}</p>}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Cursor />
        </div>
    );
}

export default Experience;
