import React, { useState } from 'react';
import { Button, Form, Row } from 'react-bootstrap';
import emailkey from '../emailkey'
import emailjs from 'emailjs-com';
import { FcApproval, FcCancel } from 'react-icons/fc';
import { ImPencil} from 'react-icons/im';
import ReCAPTCHA from "react-google-recaptcha";


const ContactForm = () => {

    const [formEmail, setFormEmail] = useState();
    const [formSubject, setFormSubject] = useState();
    const [formMessage, setFormMessage] = useState();
    const [formEmailValide, setFormEmailValide] = useState();
    const [reCaptcha, setRecaptcha] = useState(null);

    const [form, setForm] = useState({
        formEmail: formEmail,
        formSubject: formSubject,
        formMessage: formMessage,
    })


    const sendEmail = (e) => {

        e.preventDefault()// Prevents default refresh by the browser
        if (reCaptcha != null) {

            emailjs.sendForm(emailkey.SERVICE_ID, emailkey.TEMPLATE_ID, e.target, emailkey.USER_ID)
                .then(result => {
                    setFormEmailValide(true);

                    e.target.reset();
                },
                    error => {
                        setFormEmailValide(false);

                    })



        } else {
            alert("Veuillez cocher la case : 'Je ne suis pas un robot' ");
        }


    }


    return (
        <div className="form-contact">
            <p> <ImPencil />  Ecrivez-nous </p>
            <Form className="contact-form" onSubmit={sendEmail} >
                <Form.Group controlId="form-contact-email">
                    <Form.Label>Adresse Email</Form.Label>
                    <Form.Control required name="formEmail" type="email" placeholder="Ex. jean-dupont@dgs-bâtiment.fr" onChange={(e) => setFormEmail(e.target.value)} />
                    <Form.Text className="text-muted">
                        Votre email ne sera jamais transmis à des tierces, ni utilisée à d'autres fins.
                 </Form.Text>
                </Form.Group>

                <Form.Group controlId="form-contact-sujet">
                    <Form.Label>Sujet</Form.Label>
                    <Form.Control required name="formSubject" type="text" placeholder="Ex. Prise de contact pour installation de climatisation" onChange={(e) => setFormSubject(e.target.value)} />
                </Form.Group>


                <Form.Group controlId="form-contact-message">
                    <Form.Label>Votre message</Form.Label>
                    <Form.Control required name="formMessage" as="textarea" rows={6} onChange={(e) => setFormMessage(e.target.value)} />
                </Form.Group>


                <Button   type="submit">Envoyer</Button>
                <ReCAPTCHA id='captcha' sitekey="6LdvXCEbAAAAAIqXcvPGD956SRmkbstpEMc-6Sxk" onChange={setRecaptcha}
                    style={{ width: '100px' }} />

                {formEmailValide == true &&
                    <p>
                        <FcApproval />
                          Votre Email a bien été envoyé à nos services.
                          Nous vous répondrons dans les plus brefs délaie
                    </p>
                }
                {formEmailValide == false &&
                    <p>
                        <FcCancel />
                          Une erreur c'est produite veuillez contacter l'administrateur
                    </p>
                }
            </Form>

        </div>
    );
};

export default ContactForm;