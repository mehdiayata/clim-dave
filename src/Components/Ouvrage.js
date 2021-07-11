import React, { useState } from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { Image, ImageGroup } from 'react-fullscreen-image';

const Ouvrage = () => {
    const [ouvrages, setOuvrages] = useState([
        {
            id: 0,
            title: "Nos climatiseurs ",
            images: [
                {
                    id: 0,
                    alt: 'Dolore',
                    src:  process.env.PUBLIC_URL + "/images/Ouvrages/image1.jpeg"
                },
                {
                    id: 1,
                    alt: 'Nostrud qui minim voluptate Lorem aliqua adipisicing nostrud veniam sint et mollit culpa ad.',
                    src:  process.env.PUBLIC_URL + "/images/Ouvrages/image2.jpeg"
                },
                {
                    id: 3,
                    alt: 'Aliqua amet laborum nulla excepteur consectetur velit deserunt sunt excepteur.',
                    src:  process.env.PUBLIC_URL + "/images/Ouvrages/image4.jpeg"
                },
               
                
                {
                    id: 5,
                    alt: 'Ut nostrud cupidatat quis aliquip occaecat sint ea tempor cupidatat ipsum exercitation.',
                    src:  process.env.PUBLIC_URL + "/images/Ouvrages/image6.jpeg"
                },
                {
                    id: 6,
                    alt: 'Ut nostrud cupidatat quis aliquip occaecat sint ea tempor cupidatat ipsum exercitation.',
                    src:  process.env.PUBLIC_URL + "/images/Ouvrages/image7.GIF"
                },
            ]
        }, 
    ]
    );
    return (
        <div className="ouvrages">
            {ouvrages.map((ouvrage) => (
                <div className="ouvrage" key={ouvrage.id}>
                    <div className="title">
                        <h3>{ouvrage.title}</h3>
                    </div>

                    <div className="container">
                        <ImageGroup>
                            <ul className="images">
                                {ouvrage.images.map((image) => (
                                    <li key={image.key}>
                                        <Image  src={image.src} alt={image.alt} />
                                    </li>
                                ))}
                            </ul>
                        </ImageGroup>
                    </div>
                </div>

            ))}



        </div>
    );
};

export default Ouvrage;