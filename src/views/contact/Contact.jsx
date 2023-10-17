import axios from 'axios';
import React, { useState } from 'react';
import Cursor from '../../components/cursor/Cursor';

function Contact() {
    const [message, setMessage] = useState('');

    const sendMessage = async () => {
        try {
            const response = await axios.post('/api/message', { message: 'Hello from the client!' });
            setMessage(response.data);
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    return (
        <div className='contact fade-in'>
            <button onClick={sendMessage}>Send Message</button>
            <div>{message}</div>
            <Cursor />
        </div>
    );
}

export default Contact;
