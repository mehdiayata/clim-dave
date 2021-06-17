import React from 'react';
import ContactForm from '../Components/ContactForm';
import Navigation from '../Components/Navigation';
import Info from '../Components/Info';
import Footer from '../Components/Footer';
import InfoDetail from '../Components/InfoDetail';
import Certification from '../Components/Certification';
import TitleHeader from '../Components/TitleHeader';
import InfoLocalisation from '../Components/InfoLocalisation';

const Contact = () => {
    return (
        <div className="contact">
            <Info />
            <Navigation />

            <TitleHeader title={'Nous contacter'} />
            <div class="localisation">
                <InfoLocalisation />
                <ContactForm />
            </div>
            <InfoDetail />

            <Footer />

        </div>
    );
};

export default Contact;