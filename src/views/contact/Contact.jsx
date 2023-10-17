// import axios from 'axios';
// import { useState } from 'react';
import Cursor from '../../components/cursor/Cursor';
import Title from '../../components/title/Title';
import './contact.scss';

function Contact() {
    return (
        <div className='contact fade-in'>
            <Title title="Contact" />
            <form 
                name="contact" 
                method="post" 
                data-netlify="true"
                onSubmit="submit">
                <input type="hidden" name="form-name" value="contact" />
                <p>
                    <label>Your Name: <input type="text" name="name"/></label>
                </p>
                <p>
                    <label>Your Email: <input type="email" name="email"/></label>
                </p>
                <p>
                    <label>Message: <textarea name="message"></textarea></label>
                </p>
                <p>
                    <button type="submit">Envoyer</button>
                </p>
            </form>
            <Cursor />
        </div>
    );
}

export default Contact;
