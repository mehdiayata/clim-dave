import React, { useState } from 'react';

const Certification = () => {

    const [certifications] = useState([
        {
            id: 0,
            src: process.env.PUBLIC_URL + "/images/Certifications/ventilationplus.png",
            alt: 'Certification RGE Ventilation+',
            href: 'https://www.qualit-enr.org/qualifications/ventilation-plus/'
        }, {
            id: 1,
            src: process.env.PUBLIC_URL + "/images/Certifications/chauffageplus.png",
            alt: 'Certification RGE Chauffage+',
            href: 'https://www.qualit-enr.org/qualifications/chauffage/'
        }, {

            id: 3,
            src: process.env.PUBLIC_URL + "/images/Certifications/qualipac.png",
            alt: 'Certification RGE Qualipac',
            href: 'https://www.qualit-enr.org/qualifications/qualipac/'
        },
    ])
    return (
        <div className="certifications">
            <div className="title">
                <h2>Certifications</h2>
            </div>

            <div className="images">

                {certifications.map((certification) => (
                    <a href={certification.href} key={certification.id}>
                        <img  className="certification" src={certification.src} alt={certification.alt} />
                    </a>
                ))}
            </div>

        </div>
    );
};

export default Certification;