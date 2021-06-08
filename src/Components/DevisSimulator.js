import React, { useEffect, useState } from 'react';
import { Form, Row } from 'react-bootstrap';
import RangeSlider from 'react-bootstrap-range-slider';
import { AiOutlineQuestionCircle } from 'react-icons/ai';

const DevisSimulator = () => {

    const [nbPiece, setNbPiece] = useState(1);
    const [cout, setCout] = useState();


    const [surfaces, setSurfaces] = useState([

        {
            id: 0,
            label: "0-15m²",
            price: 1200,
            selected: "selected"
        },
        {
            id: 1,
            label: "15-30m²",
            price: 1500,
        },
        {
            id: 2,
            label: "30-45m²",
            price: 1650,
        },
        {
            id: 3,
            label: "45-60m²",
            price: 2000,
        },
        {
            id: 4,
            label: "60-75m²",
            price: 2500,
        },
        {
            id: 5,
            label: "75-90m²",
            price: 2800,
        },
        {
            id: 7,
            label: "100m² et +",
            price: 0
        },
    ]
    );


    const [surfaceSelected, setSurfaceSelected] = useState(surfaces[0].price);

    const calculCout = () => {
        const coutCalcule = Number(nbPiece) * Number(surfaceSelected);

        if (coutCalcule != 0) {

            setCout(Number(coutCalcule) + ' €');

        } else {
            setCout("Veuillez nous contacter");
        }

        return coutCalcule;
    }

    useEffect(() => {
        calculCout();
    });





    return (
        <div className="devisSimulator">
            <div class="explication">
                <Row>
                    <AiOutlineQuestionCircle />
                    <h3> Prevoyez votre budget pour la pose d'une climatisation</h3>
                </Row>
                <p> Estimez le coût de vos travaux instantanément.
                Sélectionnez le nombre de pièce à climatiser, puis la surfaces des pièces pour avoir une estimation
                    du côut de la pose de climatisation. <br />
                    Puis contactez nous avec le forumulaire de contact, pour une prise de rendez-vous afin d'obtenir plus de détail. </p>
            </div>
            <Form>
                <Form.Group controlId="formNbPiece">
                    <Form.Label>Nombre de pièce</Form.Label>
                    <RangeSlider min={1} max={10} value={nbPiece} onChange={(e) => setNbPiece(e.target.value)} size='sm' />
                </Form.Group>

                <Form.Group controlId="formSurface">
                    <Form.Label> Surface à climatiser</Form.Label>

                    <Form.Control as="select" size="sm" custom value={surfaceSelected} onChange={(e) => setSurfaceSelected(e.target.value)}>
                        {surfaces.map((surface) => {
                            return (
                                <option value={surface.price} key={surface.id}> {surface.label}</option>
                            )
                        })}

                    </Form.Control>

                </Form.Group>
            </Form>

            <div className="cout">

                {(function () {
                    if (cout != "Veuillez nous contacter") {
                        return <p className="cout-subtitle">Le coût approximatif de votre pose de climatisation est de :</p>
                    }
                })()}


                <p className="cout-somme"> {cout} </p>
            </div>

        </div>
    );
};

export default DevisSimulator;