import { useEffect, useState } from 'react';
import codeData from './code.json';
import './code.scss';

function Code() {
    const [infos, setInfos] = useState([]);

    useEffect(() => {
        setInfos(codeData);
    }, []);

    return (
        <div className='code'>
            {infos.map((text, index) => (
                <div className='code_line' key={index}>
                    <div className='code_line_num'>{index + 1}</div>
                    <div className='code_line_txt'>{text}</div>
                </div>
            ))}
        </div>
    );
}

export default Code;
