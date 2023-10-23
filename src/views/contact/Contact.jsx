import { useState } from 'react';
import Github from '../../components/contact/Github';
import Linkedin from '../../components/contact/Linkedin';
import Mail from '../../components/contact/Mail';
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
    const [selectedSubjects, setSelectedSubjects] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [nameValid, setNameValid] = useState(true);
    const [emailValid, setEmailValid] = useState(true);

    const handleCheckboxChange = (e) => {
        const { value } = e.target;
        if (selectedSubjects.includes(value)) {
            setSelectedSubjects(selectedSubjects.filter(subject => subject !== value));
        } else {
            setSelectedSubjects([...selectedSubjects, value]);
        }
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
        if (e.target.value.length >= 3) {
            setNameValid(true);
        } else {
            setNameValid(false);
        }
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        // Basic email validation check
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setEmailValid(re.test(e.target.value));
    };

    return (
        <div className='contact fade-in'>
            <Title title="Contact" />
            <div className='contact_container'>
                <form className='contact_container_form' name="contact" method="post" data-netlify="true" onSubmit="submit">
                    <input type="hidden" name="form-name" value="contact" />
                    <div className='contact_container_form_input'>
                    <input
                        type="text"
                        name="name"
                        autocomplete="new-password"
                        placeholder='_name'
                        value={name}
                        onChange={handleNameChange}
                        className={name.length > 0 ? (nameValid ? 'valid' : 'invalid') : ''}
                    />
                    <input
                        type="email"
                        name="email"
                        autocomplete="new-password"
                        placeholder='_email'
                        value={email}
                        onChange={handleEmailChange}
                        className={email.length > 0 ? (emailValid ? 'valid' : 'invalid') : ''}
                    />
                    </div>
                    <div className='contact_container_form_checkbox'>
                        {subjects.map((subject, index) => (
                            <label key={`option${index + 1}`} className={`contact_container_form_checkbox_button ${selectedSubjects.includes(subject) ? 'checked' : ''}`}>
                                <input
                                    type="checkbox"
                                    id={`option${index + 1}`}
                                    name="sujet"
                                    value={subject}
                                    checked={selectedSubjects.includes(subject)}
                                    onChange={handleCheckboxChange}
                                />
                                {subject}
                            </label>
                        ))}
                    </div>
                    <div className='contact_container_form_textarea'>
                        <textarea name="message" placeholder='_message' cols='30' rows='10'></textarea>
                    </div>
                    <div className='contact_container_form_submit'>
                        <button type="submit">Envoyer</button>
                    </div>
                </form>
                <div className='contact_container_details'>
                    <div className='contact_container_details_text'>
                        <h2>Prenons contact</h2>
                        <p>Partagez vos idées passionnantes ou posez des questions stimulantes via le formulaire de contact. Je serai ravi de vous répondre dans un délai de 24 heures.</p>
                    </div>
                    <div className='contact_container_details_reseaux'>
                        <h3>Mes réseaux :</h3>
                        <div className='contact_container_details_reseaux_link'>
                            <a href='mailto:nolan@3ntf.fr' target='blanc'><Mail/></a>
                            <a href='https://www.linkedin.com/in/nolan-ramos/' target='blanc'><Linkedin/></a>
                            <a href='https://github.com/Nolan-ramos' target='blanc'><Github/></a>
                        </div>
                    </div>
                </div>
            </div>
            <Cursor />
        </div>
    );
}

export default Contact;
