import React, { useEffect, useState } from 'react';
import './title.scss';

function Title(props) {
    const [animatedTitle, setAnimatedTitle] = useState(props.title);
    const animationDuration = 2000; 
    const delayBetweenAnimations = 1000;

    useEffect(() => {
        const titleLength = props.title.length;

        let animationInterval;

        const animateTitle = () => {
            let i = 0;

            animationInterval = setInterval(() => {
                if (i < titleLength) {
                    setAnimatedTitle(props.title.slice(0, titleLength - i));
                    i++;
                } else {
                    clearInterval(animationInterval);
                    setTimeout(resetTitle, delayBetweenAnimations);
                }
            }, animationDuration / titleLength);
        };

        const resetTitle = () => {
            let i = 0;
            animationInterval = setInterval(() => {
                if (i < titleLength) {
                    setAnimatedTitle(props.title.slice(0, i + 1));
                    i++;
                } else {
                    clearInterval(animationInterval);
                    setTimeout(animateTitle, delayBetweenAnimations);
                }
            }, animationDuration / titleLength);
        };

        animateTitle();

        return () => {
            clearInterval(animationInterval);
        };
    }, [props.title]);

    return (
        <h1>
            <span>{"{-- "}</span>
            {animatedTitle}
            <p>|</p>
            <span>{" --}"}</span>
        </h1>
    )
}

export default Title;
