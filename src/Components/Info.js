import React from 'react';
import { BsHouse, BsPhone } from 'react-icons/bs';
import { FiFacebook, FiInstagram, FiMail, FiTwitter } from 'react-icons/fi';


const Info = () => {
    return (
        <div className="info_site">
            <div className="info_contact">
                <p> <BsPhone /> 06 52 19 72 89</p>
                <p> <FiMail /> gdeenergie.13@gmail.com</p>
                <p> <BsHouse />16 Chemin DU VAL DES BOIS 13009 MARSEILLE</p>
            </div>

            <div className="info_rs">
                <p> <a href="https://www.facebook.com/profile.php?id=100061358056858"><FiFacebook /></a></p>
                <p> <a href=""><FiInstagram /></a></p>

            </div>
       
        </div>
    );
};

export default Info;