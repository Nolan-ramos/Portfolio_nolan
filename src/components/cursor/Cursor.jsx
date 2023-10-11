import { useEffect, useState } from 'react';
import './cursor.scss';

function Cursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [cursorSize, setCursorSize] = useState({ width: '10px', height: '10px' });
    const [cursorBackgroundColor, setCursorBackgroundColor] = useState('');

    const updateMousePosition = (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnterLink = () => {
        setCursorSize({ width: '20px', height: '20px' });
        setCursorBackgroundColor('rgba(0, 0, 0, 0)');
    };

    const handleMouseLeaveLink = () => {
        setCursorSize({ width: '10px', height: '10px' });
        setCursorBackgroundColor(getComputedStyle(document.documentElement).getPropertyValue('--primary-color'));
    };

    const handleMouseEnterChangeCursor = () => {
        // Mettez à jour les propriétés du curseur lorsque vous survolez un élément avec la classe "change_cursor"
        setCursorSize({ width: '20px', height: '20px' });
        setCursorBackgroundColor('rgba(0, 0, 0, 0)'); // Modifiez la couleur de fond comme vous le souhaitez
    };

    const handleMouseLeaveChangeCursor = () => {
        // Rétablissez les propriétés du curseur lorsque vous quittez un élément avec la classe "change_cursor"
        setCursorSize({ width: '10px', height: '10px' });
        setCursorBackgroundColor(getComputedStyle(document.documentElement).getPropertyValue('--primary-color'));
    };

    useEffect(() => {
        document.addEventListener('mousemove', updateMousePosition);

        return () => {
            document.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    useEffect(() => {
        const links = document.querySelectorAll('a');
        links.forEach((link) => {
            link.addEventListener('mouseenter', handleMouseEnterLink);
            link.addEventListener('mouseleave', handleMouseLeaveLink);
        });

        const changeCursorElements = document.querySelectorAll('.change_cursor');
        changeCursorElements.forEach((element) => {
            element.addEventListener('mouseenter', handleMouseEnterChangeCursor);
            element.addEventListener('mouseleave', handleMouseLeaveChangeCursor);
        });

        return () => {
            links.forEach((link) => {
                link.removeEventListener('mouseenter', handleMouseEnterLink);
                link.removeEventListener('mouseleave', handleMouseLeaveLink);
            });

            changeCursorElements.forEach((element) => {
                element.removeEventListener('mouseenter', handleMouseEnterChangeCursor);
                element.removeEventListener('mouseleave', handleMouseLeaveChangeCursor);
            });
        };
    }, []);

    useEffect(() => {
        setCursorBackgroundColor(getComputedStyle(document.documentElement).getPropertyValue('--primary-color'));
    }, []);

    return (
        <div
            className="cursor"
            style={{
                width: cursorSize.width,
                height: cursorSize.height,
                backgroundColor: cursorBackgroundColor,
                top: mousePosition.y + 'px',
                left: mousePosition.x + 'px',
            }}
        ></div>
    );
}

export default Cursor;
