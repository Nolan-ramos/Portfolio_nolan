import React, { useEffect, useState } from 'react';
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
        <h1>
            <span>{"{--"}</span>
            {text}
            <p>|</p>
            <span>{"--}"}</span>
        </h1>
    );
}

export default Title;
