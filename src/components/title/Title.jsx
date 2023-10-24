import { useEffect, useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import './title.scss';

function Title(props) {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [speed, setSpeed] = useState(300); // Vitesse de suppression/réécriture

    useEffect(() => {
        const titleText = props.title;
        let timer;

        if (!isDeleting) {
            timer = setTimeout(() => {
                if (currentIndex < titleText.length) {
                setText(titleText.slice(0, currentIndex + 1));
                setCurrentIndex(currentIndex + 1);
                } else {
                setIsDeleting(true);
                setSpeed(300); // Vitesse de suppression
                setCurrentIndex(titleText.length);
                }
            }, speed);
        } else {
            timer = setTimeout(() => {
                if (currentIndex > 0) {
                setText(titleText.slice(0, currentIndex - 1));
                setCurrentIndex(currentIndex - 1);
                } else {
                setIsDeleting(false);
                setSpeed(300); // Vitesse de réécriture
                }
            }, speed);
        }

        return () => {
            clearTimeout(timer);
        };
    }, [props.title, isDeleting, currentIndex, speed]);

    return (
        <div className='title'>
            <span>{"{--"}</span>
            <h1>{text}</h1>
            <p>|</p>
            <span>{"--}"}</span>
        </div>
    );
}

Title.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Title;
