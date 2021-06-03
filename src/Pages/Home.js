import React from 'react';
import Slide from '../Components/Slide';
import Navigation from '../Components/Navigation';
import Article from '../Components/Article';
import Info from '../Components/Info';
import Footer from '../Components/Footer';

const Home = () => {
    return (
        <div >
            <Info />
            <Navigation /> 
            <Slide />
            <Article />
            <Footer />
        </div>
    );
};

export default Home;