import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const InfoLocalisation = () => {
    return (
        <div className="infoLocalisation">


            <p> <FaMapMarkerAlt />26 Rue François Mauriac 13013 MARSEILLE</p>

            <div className="map-responsive">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.991331569527!2d5.414379669355676!3d43.27774148071354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9b8cac1dcc5a3%3A0xbf2404f2e5a9671f!2sRue%20Fran%C3%A7ois%20Mauriac%2C%2013010%20Marseille!5e0!3m2!1sfr!2sfr!4v1625960216155!5m2!1sfr!2sfr" width="700" height="600" allowfullscreen="" loading="lazy"></iframe>
            </div>

        </div>
    );
};

export default InfoLocalisation;