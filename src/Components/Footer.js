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
                            <h4>GDEEnergie</h4>
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
                            <li><FiMail /> david.guedj@gdeenergie.fr</li>
                            <li><BsHouse /> 26 Rue François Mauriac <br /> 13013 MARSEILLE</li>
                        </ul>
                    </div>

                    {/*

                    <div className="contents_legal">
                        <ul>
                            <h4>Information</h4>
                            <li>Mentions légal</li>
                            <li>Cookies</li>
                        </ul>
                    </div>*/ }

                </div>
                <div className="rs">
                    <a href="https://www.facebook.com/profile.php?id=100061358056858"> <FiFacebook /></a>
                    {/*<FiTwitter />*/}
                    {/*<FiInstagram />*/}
                </div>
            </Row>

            <Row className="map-responsive">


                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.991331569527!2d5.414379669355676!3d43.27774148071354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9b8cac1dcc5a3%3A0xbf2404f2e5a9671f!2sRue%20Fran%C3%A7ois%20Mauriac%2C%2013010%20Marseille!5e0!3m2!1sfr!2sfr!4v1625960216155!5m2!1sfr!2sfr" width="700" height="600" allowfullscreen="" loading="lazy"></iframe>
            </Row>
            <Row className="copyright">


                <p> <AiOutlineCopyrightCircle /> 2021 - GDEEnergie</p>
            </Row>

        </div>
    );
};

export default Footer;