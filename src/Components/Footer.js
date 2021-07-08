import React from 'react';
import { Row } from 'react-bootstrap';
import { FiFacebook, FiInstagram, FiMail, FiTwitter } from 'react-icons/fi';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { BsHouse, BsPhone } from 'react-icons/bs';

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
                            <li><NavLink to='/home' exact> Accueil </NavLink></li>
                            <li> <NavLink to='/realisation' exact> Réalisations </NavLink></li>
                            <li> <NavLink to='/devis' exact> Devis </NavLink></li>
                            <li> <NavLink to='/contact' exact> Contact </NavLink></li>
                        </ul>
                    </div>
                    <div className="contents_contact">
                        <ul>
                            <h4>Contactez nous</h4>
                            <li><BsPhone /> 06 52 19 72 82</li>
                            <li><BsPhone /> 07 81 70 65 39</li>
                            <li><FiMail /> GDEENERGIE.13@GMAIL.COM</li>
                            <li><BsHouse />16 Chemin DU VAL DES BOIS <br/> 13009 MARSEILLE</li>
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