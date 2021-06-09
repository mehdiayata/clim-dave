import React from 'react';
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';

const Footer = () => {
    return (
        <div className="footer">
            <div className="image_footer">
                <img src= {process.env.PUBLIC_URL + "/images/Logos/logo-gdeenergie-black.png"} alt="logo"/>
            </div>

            <div className="contents">
                <h3>Dave-Clim </h3>
            </div>

            <div className="rs">
                <FiFacebook />
                <FiTwitter />
                <FiInstagram/>
            </div>
        </div>
    );
};

export default Footer;