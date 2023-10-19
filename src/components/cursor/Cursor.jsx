import { useEffect, useState } from 'react';
import './cursor.scss';

function Cursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [cursorSize, setCursorSize] = useState({ width: '10px', height: '10px' });
    const [cursorBackgroundColor, setCursorBackgroundColor] = useState('');

    const updateMousePosition = (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => {
        setCursorSize({ width: '20px', height: '20px' });
        setCursorBackgroundColor('rgba(0, 0, 0, 0)');
    };
    
    const handleMouseLeave = () => {
        setCursorSize({ width: '10px', height: '10px' });
        setCursorBackgroundColor(getComputedStyle(document.documentElement).getPropertyValue('--primary-color'));
    };
    
    useEffect(() => {
        const elements = document.querySelectorAll('a, button, input, textarea, label');
        elements.forEach((element) => {
            element.addEventListener('mouseenter', handleMouseEnter);
            element.addEventListener('mouseleave', handleMouseLeave);
        });
    
        return () => {
            elements.forEach((element) => {
                element.removeEventListener('mouseenter', handleMouseEnter);
                element.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    useEffect(() => {
        document.addEventListener('mousemove', updateMousePosition);

        return () => {
            document.removeEventListener('mousemove', updateMousePosition);
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