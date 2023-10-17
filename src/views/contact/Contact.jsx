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
                    <label>Your Name: 
                    <input type="text" name="name"/></label>
                    <label>Your Email: 
                    <input type="email" name="email"/></label>
                    <label>Message: <textarea name="message"></textarea></label>
                    <label>
                    <input type="checkbox" name="option1" value="sujet 1" /> sujet 1
                    </label>
                    <label>
                        <input type="checkbox" name="sujet" value="sujet 2" /> sujet 2
                    </label>
                    <label>
                        <input type="checkbox" name="sujet" value="sujet 3" /> sujet 3
                    </label>
                    <label>
                        <input type="checkbox" name="sujet" value="sujet 4" /> sujet 4
                    </label>
                    <label>
                        <input type="checkbox" name="sujet" value="sujet 5" /> sujet 5
                    </label>
                    <label>
                        <input type="checkbox" name="sujet" value="sujet 6" /> sujet 6
                    </label>
                    <button type="submit">Envoyer</button>
            </form>
            <Cursor />
        </div>
    );
}

export default Contact;
