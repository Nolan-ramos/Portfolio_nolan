import Cursor from '../../components/cursor/Cursor';
import Title from '../../components/title/Title';
import './contact.scss';

function Contact() {
    return (
        <div className='contact fade-in'>
            <Title title="Contact" />
            <form name="contact" method="POST" netlify>
                <p>
                    <label>Votre nom : <input type="text" name="name" /></label>
                </p>
                <p>
                    <label>Votre email : <input type="email" name="email" /></label>
                </p>
                <p>
                    <label>Votre message : <textarea name="message"></textarea></label>
                </p>
                <p>
                    <button type="submit">Envoyer</button>
                </p>
            </form>
            <Cursor />
        </div>
    )
}

export default Contact