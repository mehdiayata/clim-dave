import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import emailkey from '../emailkey'
import emailjs from 'emailjs-com';

const ContactForm = () => {

    const [formEmail, setFormEmail] = useState();
    const [formSubject, setFormSubject] = useState();
    const [formMessage, setFormMessage] = useState();

    const [form, setForm] = useState({
        formEmail: formEmail,
        formSubject: formSubject,
        formMessage: formMessage,
    })
    

    const sendEmail = (e) => {
        e.preventDefault()// Prevents default refresh by the browser
        emailjs.sendForm(emailkey.SERVICE_ID, emailkey.TEMPLATE_ID, e.target, emailkey.USER_ID)
            .then(result => {
                console.log(result.text);
            },
                error => {
                    console.log(error.text);
                })


        e.target.reset();

    }


    return (
        <div className="form-contact">
            <Form className="contact-form" onSubmit={sendEmail} >
                <Form.Group controlId="form-contact-email">
                    <Form.Label>Adresse Email</Form.Label>
                    <Form.Control name="formEmail" type="email" placeholder="Ex. jean-dupont@dgs-bâtiment.fr" onChange={(e) => setFormEmail(e.target.value)} />
                    <Form.Text className="text-muted">
                        Votre email ne sera jamais transmis à des tierces, ni utilisée à d'autres fins.
                 </Form.Text>
                </Form.Group>

                <Form.Group controlId="form-contact-sujet">
                    <Form.Label>Sujet</Form.Label>
                    <Form.Control name="formSubject" type="text" placeholder="Ex. Prise de contact pour installation de climatisation" onChange={(e) => setFormSubject(e.target.value)} />
                </Form.Group>


                <Form.Group controlId="form-contact-message">
                    <Form.Label>Votre message</Form.Label>
                    <Form.Control name="formMessage"  as="textarea" rows={6} onChange={(e) => setFormMessage(e.target.value)} />
                </Form.Group>

                <Button type="submit">Envoyer</Button>
            </Form>

        </div>
    );
};

export default ContactForm;