import React from 'react';
import ContactForm from '../Components/ContactForm';
import DevisSimulator from '../Components/DevisSimulator';
import Footer from '../Components/Footer';
import Info from '../Components/Info';
import Navigation from '../Components/Navigation';

const Devis = () => {
    return (

        <div className="devis">

            <div className="header">
                <Info />
                <Navigation />
            </div>

            <div className="corps">
                <DevisSimulator />

                <ContactForm />

            </div>

            <Footer />


        </div>
    );
};

export default Devis;