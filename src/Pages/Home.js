import React from 'react';
import Slide from '../Components/Slide';
import Navigation from '../Components/Navigation';
import Article from '../Components/Article';
import Info from '../Components/Info';
import Footer from '../Components/Footer';
import InfoDetail from '../Components/InfoDetail';
import Certification from '../Components/Certification';

const Home = () => {
    return (
        <div >
            <Info />
            <Navigation /> 
            <Slide />
            <Article />
            <Certification/>
            <InfoDetail />
            <Footer />
        </div>
    );
};

export default Home;