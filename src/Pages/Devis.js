import React from 'react';
import DevisSimulator from '../Components/DevisSimulator';
import Footer from '../Components/Footer';
import Info from '../Components/Info';
import Navigation from '../Components/Navigation';

const Devis = () => {
    return (
        <div className="devis">
             <Info />
            <Navigation /> 
           
            <DevisSimulator />
            
            <Footer />
        </div>
    );
};

export default Devis;