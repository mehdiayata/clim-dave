import React from 'react';
import { Button, Form } from 'react-bootstrap';

const ContactForm = () => {
    return (
        <div className="form-contact">
            <Form>            <Form.Group controlId="form-contact-email">
                <Form.Label>Adresse Email</Form.Label>
                <Form.Control type="email" placeholder="Ex. jean-dupont@dgs-bâtiment.fr" />
                <Form.Text className="text-muted">
                    Votre email ne sera jamais transmis à des tierces, ni utilisée à d'autres fins. 
                 </Form.Text>
            </Form.Group>

            <Form.Group controlId="form-contact-sujet">
                <Form.Label></Form.Label>
                <Form.Control type="text" placeholder="Ex. Prise de contact pour installation de climatisation" />
            </Form.Group>


            <Form.Group controlId="form-contact-message">
                <Form.Label>Votre message</Form.Label>
                <Form.Control as="textarea" rows={6} />
            </Form.Group>

            <Button>Envoyer</Button>
            </Form>

        </div>
    );
};

export default ContactForm;