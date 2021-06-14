import React from 'react';
import { NavLink } from 'react-router-dom';

const InfoDetail = () => {
    return (
        <div className="infoDetail">


            <NavLink to='/devis' exact>

                <p>Installation </p>
            </NavLink>

            <NavLink to='/contact' exact>
                <p>Dépanage</p>
            </NavLink>

            <p>06 52 19 72 82</p>
        </div>
    );
};

export default InfoDetail;