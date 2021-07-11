import React, { useState } from 'react';

const Certification = () => {

    const [certifications] = useState([
        {
            id: 0,
            src: process.env.PUBLIC_URL + "/images/Certifications/ventilationplus.png",
            alt: 'Certification RGE Ventilation+',
        }, {
            id: 1,
            src: process.env.PUBLIC_URL + "/images/Certifications/chauffageplus.png",
            alt: 'Certification RGE Chauffage+',
        }, {

            id: 3,
            src: process.env.PUBLIC_URL + "/images/Certifications/qualipac.png",
            alt: 'Certification RGE Qualipac',
        },
    ])
    return (
        <div className="certifications">
            <div className="title">
                <h2>Certifications</h2>
            </div>

            <div className="images">

                {certifications.map((certification) => (

                    <img key={certification.id} className="certification" src={certification.src} alt={certification.alt} />

                ))}
            </div>

        </div>
    );
};

export default Certification;