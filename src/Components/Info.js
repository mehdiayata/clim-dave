import React from 'react';
import { BsHouse, BsPhone } from 'react-icons/bs';
import { FiFacebook, FiInstagram, FiMail, FiTwitter } from 'react-icons/fi';


const Info = () => {
    return (
        <div className="info_site">
            <div className="info_contact">
                <p> <BsPhone /> 06 52 19 72 89</p>
                <p> <FiMail /> gdeenergie.13@gmail.com</p>
                <p> <BsHouse />N2 Avenue Dupont - 13500 Martigues</p>
            </div>

            <div className="info_rs">
                <p> <FiFacebook /></p>
                <p> <FiInstagram /></p>

            </div>

        </div>
    );
};

export default Info;