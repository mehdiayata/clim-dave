import React from 'react';
import ContactForm from '../Components/ContactForm';
import DevisSimulator from '../Components/DevisSimulator';
import Footer from '../Components/Footer';
import Info from '../Components/Info';
import Navigation from '../Components/Navigation';
import TitleHeader from '../Components/TitleHeader';
import InfoDetail from '../Components/InfoDetail';

const Devis = () => {
    return (

        <div className="devis">

            <div className="header">
                <Info />
                <Navigation />
            </div>
                <TitleHeader title="Devis"/>

            <div className="corps">
                <DevisSimulator />

                <ContactForm />

            </div>

            
            <InfoDetail />

            <Footer />


        </div>
    );
};

export default Devis;