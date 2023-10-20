// import axios from 'axios';
// import { useState } from 'react';
import Cursor from '../../components/cursor/Cursor';
import Title from '../../components/title/Title';
import './contact.scss';

function Contact() {
    return (
        <div className='contact fade-in'>
            <Title title="Contact" />
            <Cursor />
        </div>
    );
}

export default Contact;
