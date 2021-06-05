import React from 'react';
import { Card } from 'react-bootstrap';

const CardDetail = (props) => {
    /*Destructuring*/
    const { card } = props;

    return (
        <div className="cards">
            <Card>
                <Card.Img variant="top" src={card.img} key={card.id} />
                <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>
                        {card.text}
                    </Card.Text>

                </Card.Body>
            </Card>

        </div>



    );
};

export default CardDetail;