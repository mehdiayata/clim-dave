import React from 'react';
import Footer from '../Components/Footer';
import Info from '../Components/Info';
import Navigation from '../Components/Navigation';
import Ouvrage from '../Components/Ouvrage';
import TitleHeader from '../Components/TitleHeader';
import InfoDetail from '../Components/InfoDetail';

const Realisation = () => {
    return (
        <div>
            <Info />
            <Navigation />
            <TitleHeader title={'Réalisation'}/>
            
            <Ouvrage />
            <InfoDetail />
            <Footer />
        </div>
    );
};

export default Realisation;