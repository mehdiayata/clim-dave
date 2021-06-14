import React, { useState } from 'react';

const Ouvrage = () => {
    const [ouvrages, setOuvrages] = useState([
        {
            id: 0,
            title: "Exercitation Lorem adipisicing ",
            images: [
                {
                    id: 0,
                    alt: 'Dolore',
                    src: 'https://dummyimage.com/150x100/000/fff',
                },
                {
                    id: 1,
                    alt: 'Nostrud qui minim voluptate Lorem aliqua adipisicing nostrud veniam sint et mollit culpa ad.',
                    src: 'https://dummyimage.com/150x100/000/fff',
                },
                {
                    id: 2,
                    alt: 'Sunt aliquip est aute proident excepteur laboris in duis non ullamco aute dolore.',
                    src: 'https://dummyimage.com/150x100/000/fff',
                },
                {
                    id: 3,
                    alt: 'Aliqua amet laborum nulla excepteur consectetur velit deserunt sunt excepteur.',
                    src: 'https://dummyimage.com/150x100/000/fff',
                },
                {
                    id: 4,
                    alt: 'Ut nostrud cupidatat quis aliquip occaecat sint ea tempor cupidatat ipsum exercitation.',
                    src: 'https://dummyimage.com/150x100/000/fff',
                },
            ]
        }, {
            id: 1,
            title: "Anim sxcepteur. ",
            images: [
                {
                    id: 0,
                    alt: 'Dolore',
                    src: 'https://dummyimage.com/150x100/000/fff',
                },
                {
                    id: 1,
                    alt: 'Nostrud qui minim voluptate Lorem aliqua adipisicing nostrud veniam sint et mollit culpa ad.',
                    src: 'https://dummyimage.com/150x100/000/fff',
                },
                {
                    id: 2,
                    alt: 'Sunt aliquip est aute proident excepteur laboris in duis non ullamco aute dolore.',
                    src: 'https://dummyimage.com/150x100/000/fff',
                },
                {
                    id: 3,
                    alt: 'Aliqua amet laborum nulla excepteur consectetur velit deserunt sunt excepteur.',
                    src: 'https://dummyimage.com/150x100/000/fff',
                },
                {
                    id: 4,
                    alt: 'Ut nostrud cupidatat quis aliquip occaecat sint ea tempor cupidatat ipsum exercitation.',
                    src: 'https://dummyimage.com/150x100/000/fff',
                },
                {
                    id: 4,
                    alt: 'Ut nostrud cupidatat quis aliquip occaecat sint ea tempor cupidatat ipsum exercitation.',
                    src: 'https://dummyimage.com/150x100/000/fff',
                },
            ]
        },
        {
            id: 2,
            title: "Dolor tempor anim  ",
            images: [
                {
                    id: 0,
                    alt: 'Dolore',
                    src: 'https://dummyimage.com/150x100/000/fff',
                },
                {
                    id: 1,
                    alt: 'Nostrud qui minim voluptate Lorem aliqua adipisicing nostrud veniam sint et mollit culpa ad.',
                    src: 'https://dummyimage.com/150x100/000/fff',
                },
                {
                    id: 2,
                    alt: 'Sunt aliquip est aute proident excepteur laboris in duis non ullamco aute dolore.',
                    src: 'https://dummyimage.com/150x100/000/fff',
                },
                {
                    id: 3,
                    alt: 'Aliqua amet laborum nulla excepteur consectetur velit deserunt sunt excepteur.',
                    src: 'https://dummyimage.com/150x100/000/fff',
                }
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

                    <div className="images">

                    {ouvrage.images.map((image) => (
                        <div className="image">
                            <img alt={image.alt} src={image.src} />    
                        </div>
                    ))}
                    </div>
                </div>





            ))}



        </div>
    );
};

export default Ouvrage;