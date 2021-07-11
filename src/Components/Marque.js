import React, { useState } from 'react';

const Marque = () => {

    const [marque] = useState([
        {
            id: 0,
            src: process.env.PUBLIC_URL + "/images/Marques/lg.png",
            alt: 'marque RGE Ventilation+',
        }, {
            id: 1,
            src: process.env.PUBLIC_URL + "/images/marques/mitsubishi.png",
            alt: 'marque RGE Chauffage+',
        }, {

            id: 3,
            src: process.env.PUBLIC_URL + "/images/marques/daikin.png",
            alt: 'marque RGE Qualipac',
        },
        {
            id: 4,
            src: process.env.PUBLIC_URL + "/Images/Marques/panasonic.png",
            alt: 'panasonic'
        }
    ])
    return (
        <div className="marque">
            <div className="title">
            </div>

            <div className="images">

                {marque.map((marque) => (

                    <img key={marque.id} className="marque" src={marque.src} alt={marque.alt} />

                ))}
            </div>

        </div>
    );
};

export default Marque;