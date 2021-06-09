import React, { useState } from 'react';
import { BsHouse } from 'react-icons/bs';
import { AiOutlineCalculator, AiOutlineContacts } from 'react-icons/ai';
import { GiAutoRepair } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <div className="menu">

                <NavLink to='/' exact activeClassName="nav-active">
                    <BsHouse/> Home
                </NavLink>

                <NavLink to='/realisation' exact activeClassName="nav-active">
                     <GiAutoRepair /> Réalisation
                </NavLink>

                
                <NavLink to='/devis' exact activeClassName="nav-active">
                    <AiOutlineCalculator /> Devis
                </NavLink>

                
                <NavLink to='/contact' exact activeClassName="nav-active">
                    <AiOutlineContacts /> Contact
                </NavLink>


            </div>

            <div className="navigation_logo">
                
            <NavLink  to='/'>
                    <img className="navigation_logo" src={process.env.PUBLIC_URL + "/images/Logos/logo-gdeenergie-black.png"}></img>
                </NavLink>
            </div>



        </div>
    );
};

export default Navigation;