import { useEffect, useState } from 'react';
import Cursor from '../../components/cursor/Cursor';
import File from '../../components/experience/File.jsx';
import Folder from '../../components/experience/Folder.jsx';
import RowRight from '../../components/experience/RowRight';
import MacButtons from '../../components/mac_buttons/mac_buttons';
import Title from '../../components/title/Title';
import './experience.scss';
import experienceData from './experienceData.json';

function Experience() {
    const [activeCategories, setActiveCategories] = useState([]);
    const [activeSubcategory, setActiveSubcategory] = useState(null);
    const [arrowRotated, setArrowRotated] = useState({});
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    const handleResize = () => {
        setIsSmallScreen(window.innerWidth < 767);
        const contenuElement = document.querySelector('.experience_content_contenu');
        const accordeonElement = document.querySelector('.experience_content_accordeon');
        if (window.innerWidth >= 767) {
            if (contenuElement) {
                contenuElement.style.right = '0';
                contenuElement.style.opacity = '1';
            }
            if (accordeonElement) {
                accordeonElement.style.opacity = '1';
            }
        }
        else{
            if (contenuElement) {
                contenuElement.style.right = 'calc(-100% - 100px)';
                contenuElement.style.opacity = '0';
            }
            if (accordeonElement) {
                accordeonElement.style.opacity = '1';
            }
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleCategoryClick = (categoryIndex) => {
        if (activeCategories.includes(categoryIndex)) {
            setActiveCategories(activeCategories.filter((item) => item !== categoryIndex));
            setArrowRotated((prevState) => ({ ...prevState, [categoryIndex]: false }));
        } else {
            setActiveCategories([...activeCategories, categoryIndex]);
            setArrowRotated((prevState) => ({ ...prevState, [categoryIndex]: true }));
        }
    };

    const isCategoryActive = (categoryIndex) => {
        return activeCategories.includes(categoryIndex);
    };

    const handleSubcategoryClick = (subcategoryData, shouldClose) => {
        if (window.innerWidth < 767) {
            const contenuElement = document.querySelector('.experience_content_contenu');
            const accordeonElement = document.querySelector('.experience_content_accordeon');
            if (activeSubcategory === subcategoryData || shouldClose) {
                setActiveSubcategory(null);
                if (contenuElement) {
                    contenuElement.style.right = 'calc(-100% - 100px)';
                    contenuElement.style.opacity = '0';
                }
                if (accordeonElement) {
                    accordeonElement.style.opacity = '1';
                }
            } else {
                setActiveSubcategory(subcategoryData);
                if (contenuElement) {
                    contenuElement.style.right = '0';
                    contenuElement.style.opacity = '1';
                }
                if (accordeonElement) {
                    accordeonElement.style.opacity = '0';
                }
            }
        } else {
            if (activeSubcategory === subcategoryData || shouldClose) {
                setActiveSubcategory(null);
            } else {
                setTimeout(() => {
                    setActiveSubcategory(subcategoryData);
                    const contentElements = document.querySelectorAll('.experience_content_contenu .experience_content_contenu_container');
                    contentElements.forEach((el) => {
                        el.classList.remove('fade-in');
                        void el.offsetWidth;
                        el.classList.add('fade-in');
                    });
                }, 0);
            }
        }
    };
    

    return (
        <div className='experience fade-in'>
            <Title title="Mes_experiences" />
            <div className='experience_container'>
                <div className='experience_header'>
                    <MacButtons />
                    <span className='experience_header_title'>_experience.app</span>
                </div>
                <div className='experience_content'>
                    <div className='experience_content_accordeon'>
                        {experienceData.map((categoryData, categoryIndex) => (
                            <div key={categoryIndex} className={`${categoryData.category} experience_content_accordeon_category`}>
                                <button onClick={() => handleCategoryClick(categoryIndex)} className='experience_content_accordeon_category_title'>
                                    <div
                                        className="experience_content_accordeon_category_title_row"
                                        style={{ transform: arrowRotated[categoryIndex] && isCategoryActive(categoryIndex) ? 'rotate(90deg)' : 'none', transition: 'transform 0.5s' }}
                                    >
                                        <RowRight />
                                    </div>
                                    <span className="experience_content_accordeon_category_title_folder"><Folder /></span>
                                    <p>{categoryData.category}</p>
                                </button>
                                <div style={{ maxHeight: isCategoryActive(categoryIndex) ? '100px' : '0', overflow: 'hidden', transition: 'max-height 0.5s ease-in-out' }}>
                                    {categoryData.subcategories.map((subcategoryData, subcategoryIndex) => (
                                        <div key={subcategoryIndex} className={`${subcategoryData.title} experience_content_accordeon_subcategory`}>
                                            <button
                                                onClick={() => handleSubcategoryClick(subcategoryData)}
                                                className={`experience_content_accordeon_subcategory_title ${activeSubcategory === subcategoryData ? 'active' : ''}`}
                                            >
                                                <span className="experience_content_accordeon_subcategory_title_file"><File /></span>
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
                            <div className={`${activeSubcategory.title.toLowerCase().replace(/\s/g, '-').replace('.txt', '')}`}>
                                <button className='experience_content_contenu_close' onClick={() => handleSubcategoryClick(activeSubcategory, true)}><RowRight /></button>
                                <h3 className='experience_content_contenu_file_title'>{activeSubcategory.title}</h3>
                                {activeSubcategory.contents.map((content, contentIndex) => (
                                    <div key={contentIndex} className="fade-in experience_content_contenu_container">
                                        <h4 className='experience_content_contenu_title'>
                                            <span>{"{-"}</span>
                                            {content.title}
                                            <span>{"-}"}</span>
                                        </h4>
                                        {content.list ? (
                                            <ul>
                                                {content.list.map((item, index) => (
                                                    <li key={index} className='experience_content_contenu_text'>
                                                        <span>-</span>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : (
                                            content.text && (
                                                <p className='experience_content_contenu_text'>
                                                    <span>-</span>
                                                    {content.text}
                                                </p>
                                            )
                                        )}
                                        {content.words && (
                                            <ul>
                                                {content.words.map((word, wordIndex) => (
                                                    <li key={wordIndex}>{word}</li>
                                                ))}
                                            </ul>
                                        )}
                                        {content.number && (
                                            <div>
                                                <span>{"{"}</span>
                                                {Array.from({ length: Math.max(5, content.number) }, (_, index) => (
                                                    <p key={index} className={index < content.number ? "level" : ""}>-</p>
                                                ))}
                                                <span>{"}"}</span>
                                            </div>
                                        )}
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
