import React from 'react';
import ModalFooter from 'react-bootstrap/ModalFooter'
import { AiOutlineCopyright } from 'react-icons/ai';
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';

const Footer = () => {
    return (
        <div className="footer">
            <div class="image_footer">
                <img src="./images/logo192.png" alt="logo"/>
            </div>

            <div class="contents">
                <h1>Dave-Clim </h1>
            </div>

            <div class="rs">
                <FiFacebook />
                <FiTwitter />
                <FiInstagram/>
            </div>
        </div>
    );
};

export default Footer;