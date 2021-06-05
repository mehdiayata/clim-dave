import React, { useState } from 'react';
import { Button, Card, Carousel, CarouselItem } from 'react-bootstrap';
import 'react-gallery-carousel/dist/index.css';


const Slide = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const [images, setImages] = useState([
        {
            id: 0,
            src: './images/Slides/0.jpg',
            title: 'In laboris',
            text: "Ea enim ex adipisicing excepteur nulla id.Elit id est elit duis pariatur do quis voluptate. ",
        }, {
            id: 1,
            src: './images/Slides/1.jpg',
            title: 'Test 1',
            text: "Do adipisicing nulla culpa qui fugiat mollit consectetur ipsum qui ullamco deserunt.",
        }, {
            id: 2,
            src: './images/Slides/2.jpg',
            title: 'Test 2',
            text: "Est sunt laboris in adipisicing ex mollit minim eiusmod.Id velit mollit commodo Lorem proident minim consequat amet dolore ipsum.",
        },
    ])


    return (
        <div>

            <Carousel activeIndex={index} onSelect={handleSelect}>
                {images.map((image) => (

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={image.src}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3></h3>
                            <p></p>

                            <Card style={{ width: '30rem', height: '30rem'}} >
                                <Card.Body>
                                    <Card.Title>{image.title}</Card.Title>
                                    <Card.Text>
                                        {image.text}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Carousel.Caption>
                    </Carousel.Item>

                ))}

            </Carousel>

        </div>
    );
};

export default Slide;