import { useState } from 'react';
import Cursor from '../../components/cursor/Cursor';
import Title from '../../components/title/Title';
import './contact.scss';

const subjects = [
    'Front-end',
    'Back-end',
    'Full-stack',
    'Design UI',
    'Design UX',
    'Design UI/UX',
];

function Contact() {
    const [checkboxes, setCheckboxes] = useState({});

    const handleCheckboxChange = (e) => {
        const { name } = e.target;
        setCheckboxes({ ...checkboxes, [name]: !checkboxes[name] });
    };

    return (
        <div className='contact fade-in'>
            <Title title="Contact" />
            <form className='contact_form' name="contact" method="post" data-netlify="true" onSubmit="submit">
                <input type="hidden" name="form-name" value="contact" />
                <div className='contact_form_input'>
                    <input type="text" name="name" placeholder='name'/>
                    <input type="email" name="email" placeholder='email'/>
                </div>
                <div className='contact_form_textarea'>
                    <textarea name="message" placeholder='message'></textarea>
                </div>
                <div className='contact_form_checkbox'>
                    {subjects.map((subject, index) => (
                        <label key={`option${index + 1}`} className={`contact_form_checkbox_button ${checkboxes['sujet'] ? 'checked' : ''}`}>
                            <input
                                type="checkbox"
                                id={`option${index + 1}`}
                                name="sujet"
                                value={subject}
                                checked={!!checkboxes['sujet']}
                                onChange={handleCheckboxChange}
                            />
                            {subject}
                        </label>
                    ))}
                </div>
                <button type="submit">Envoyer</button>
            </form>
            <Cursor />
        </div>
    );
}

export default Contact;
