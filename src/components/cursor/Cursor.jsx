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

    const handleMouseEnterButton = () => {
        setCursorSize({ width: '20px', height: '20px' });
        setCursorBackgroundColor('rgba(0, 0, 0, 0)');
    };

    const handleMouseLeaveButton = () => {
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

        const buttons = document.querySelectorAll('button');
        buttons.forEach((button) => {
            button.addEventListener('mouseenter', handleMouseEnterButton);
            button.addEventListener('mouseleave', handleMouseLeaveButton);
        });

        return () => {
            links.forEach((link) => {
                link.removeEventListener('mouseenter', handleMouseEnterLink);
                link.removeEventListener('mouseleave', handleMouseLeaveLink);
            });

            buttons.forEach((button) => {
                button.removeEventListener('mouseenter', handleMouseEnterButton);
                button.removeEventListener('mouseleave', handleMouseLeaveButton);
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