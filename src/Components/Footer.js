import React from 'react';
import { Row } from 'react-bootstrap';
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';

const Footer = () => {
    return (
        <div className="footer">
            <Row className="footer_contents">
                <div className="image_footer">
                    <img src={process.env.PUBLIC_URL + "/images/Logos/logo-gdeenergie-black.png"} alt="logo" />
                </div>


                <div className="contents">
                    <div className="contents_nav">
                        <ul>
                            <h4>GDE-Energie</h4>
                            <li>Accueil</li>
                            <li>Réalisations</li>
                            <li>Devis</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    <div className="contents_contact">
                        <ul>
                            <h4>Contactez nous</h4>
                            <li>06 52 19 72 82</li>
                            <li>GDEENERGIE.13@GMAIL.COM</li>
                            <li>07 81 70 65 39</li>
                            <li>38 Avenue des mimosas etc</li>
                        </ul>
                    </div>

                    <div className="contents_legal">
                        <ul>
                            <h4>Information</h4>
                            <li>Mentions légal</li>
                            <li>Cookies</li>
                        </ul>
                    </div>
                </div>

                <div className="rs">
                    <FiFacebook />
                    <FiTwitter />
                    <FiInstagram />
                </div>
            </Row>

            <Row className="copyright">

                <p> <AiOutlineCopyrightCircle /> 2021 - GDEEnergie</p>
            </Row>

        </div>
    );
};

export default Footer;