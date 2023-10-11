import { useState } from 'react';
import MacButtons from '../../components/mac_buttons/mac_buttons';
import Title from '../../components/title/Title';
import './experience.scss';
import experienceData from './experienceData.json';

function Experience() {
    const [activeSubcategory, setActiveSubcategory] = useState(null);
    const [activeSubcategoryIndices, setActiveSubcategoryIndices] = useState(new Array(experienceData.length).fill(null));

    const handleSubcategoryClick = (categoryIndex, subcategoryIndex, subcategoryData) => {
        setActiveSubcategoryIndices((prevIndices) => {
            const newIndices = [...prevIndices];
            newIndices[categoryIndex] = subcategoryIndex;
            return newIndices;
        });

        setActiveSubcategory(null);

        setActiveSubcategoryIndices((prevIndices) => {
            const newIndices = [...prevIndices];
            newIndices[categoryIndex] = null;
            return newIndices;
        });

        setTimeout(() => {
            setActiveSubcategory(subcategoryData);
        }, 10);
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
                                                onClick={() => handleSubcategoryClick(categoryIndex, subcategoryIndex, subcategoryData)}
                                                className={`experience_content_accordeon_title_subcategory ${activeSubcategoryIndices[categoryIndex] === subcategoryIndex ? 'active' : ''}`}
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
                                    <div key={contentIndex}>
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
