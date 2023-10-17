import Cursor from '../../components/cursor/Cursor';
import Title from '../../components/title/Title';
import './contact.scss';

function Contact() {

    return (
        <div className='contact fade-in'>
            <Title title="Contact" />
            <form name="contact" method="POST" data-netlify="true">
                <p>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" />
                </p>
                <p>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" />
                </p>
                <p>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" />
                </p>
                <p>
                    <button type="submit">Send</button>
                </p>
            </form>
            <Cursor />
        </div>
    );
}

export default Contact;
