import React, { useState } from 'react';
import { BsHouse } from 'react-icons/bs';
import { AiOutlineCalculator, AiOutlineContacts } from 'react-icons/ai';
import { GiAutoRepair } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <div className="menu">

                <NavLink extact to='/' activeClassName="nav-active">
                    <BsHouse/> Home
                </NavLink>

                <NavLink extact to='/realisation' activeClassName="nav-active">
                     <GiAutoRepair /> Réalisation
                </NavLink>

                
                <NavLink extact to='/simulateur' activeClassName="nav-active">
                    <AiOutlineCalculator /> Devis gratuit
                </NavLink>

                
                <NavLink extact to='/contact' activeClassName="nav-active">
                    <AiOutlineContacts /> Contact
                </NavLink>


            </div>

            <div className="navigation_logo">
                
            <NavLink exact to='/test2' activeClassName="nav-active">
                    <img className="navigation_logo" src="./images/logo192.png"></img>
                </NavLink>
            </div>



        </div>
    );
};

export default Navigation;