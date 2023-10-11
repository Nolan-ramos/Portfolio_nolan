import React, { useState } from 'react';
import MacButtons from '../../components/mac_buttons/mac_buttons';
import Title from '../../components/title/Title';
import './experience.scss';
import experienceData from './experienceData.json';

function Experience() {
    const [openCategories, setOpenCategories] = useState({});
    const [activeSubcategory, setActiveSubcategory] = useState(null); // État pour stocker la sous-catégorie active

    const toggleCategory = (category) => {
        setOpenCategories((prevState) => ({
            ...prevState,
            [category]: !prevState[category],
        }));
    };

    const toggleSubcategory = (subcategory) => {
        setActiveSubcategory(subcategory === activeSubcategory ? null : subcategory);
    };

    return (
        <div className='experience'>
            <Title title="Experience" />
            <div className='experience_container'>
                <div className='experience_header'>
                    <MacButtons />
                    <span className='experience_header_title'>_experience.app</span>
                </div>
                <div className='experience_content'>
                    <div className='experience_content_accordeon'>
                    {experienceData.map((categoryData, index) => (
                        <div key={index} className={categoryData.category}>
                            <h2 className='change_cursor' onClick={() => toggleCategory(categoryData.category)}>
                                {categoryData.category}
                            </h2>
                            {openCategories[categoryData.category] && (
                                <div>
                                    {categoryData.subcategories.map((subcategoryData, subIndex) => (
                                        <div
                                            key={subIndex}
                                            className={subcategoryData.title}
                                            onClick={() => toggleSubcategory(subcategoryData)}
                                        >
                                            <h3>{subcategoryData.title}</h3>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                    </div>
                    <div className="experience_content_contenu">
                        {activeSubcategory && (
                            <div>
                                <h3>{activeSubcategory.title}</h3>
                                {activeSubcategory.contents.map((content, contentIndex) => (
                                    <div key={contentIndex}>
                                        <h4>{content.title}</h4>
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
        </div>
    );
}

export default Experience;
