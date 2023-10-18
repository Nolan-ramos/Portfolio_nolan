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
    const [selectedSubjects, setSelectedSubjects] = useState([]);

    const handleCheckboxChange = (e) => {
        const { value } = e.target;
        if (selectedSubjects.includes(value)) {
            setSelectedSubjects(selectedSubjects.filter(subject => subject !== value));
        } else {
            setSelectedSubjects([...selectedSubjects, value]);
        }
    };

    return (
        <div className='contact fade-in'>
            <Title title="Contact" />
            <div className='contact_container'>
                <form className='contact_container_form' name="contact" method="post" data-netlify="true" onSubmit="submit">
                    <input type="hidden" name="form-name" value="contact" />
                    <div className='contact_container_form_input'>
                        <input type="text" name="name" placeholder='name'/>
                        <input type="email" name="email" placeholder='email'/>
                    </div>
                    <div className='contact_container_form_textarea'>
                        <textarea name="message" placeholder='message'></textarea>
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
                    <button type="submit">Envoyer</button>
                </form>
                <div className='contact_container_details'>
                    <h2>Hey</h2>
                </div>
            </div>
            <Cursor />
        </div>
    );
}

export default Contact;
