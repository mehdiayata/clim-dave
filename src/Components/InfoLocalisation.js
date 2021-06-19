import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const InfoLocalisation = () => {
    return (
        <div className="infoLocalisation">


            <p> <FaMapMarkerAlt />N2 Avenue Dupont - 13500 Martigues</p>

            <div className="map-responsive">

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.6875709545116!2d5.381003420904363!3d43.50417325382855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9ed5b685e8861%3A0x311713a8fb63c96!2sSite-M%C3%A9morial%20du%20Camp%20des%20Milles!5e0!3m2!1sfr!2sfr!4v1623955683194!5m2!1sfr!2sfr" width="700" height="600" allowfullscreen="" loading="lazy"></iframe>
            </div>

        </div>
    );
};

export default InfoLocalisation;