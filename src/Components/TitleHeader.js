import React, { useState } from 'react';

const TitleHeader = (props) => {
    const { title } = props;

    return (
        <div class="titleHeader">
            
            <h1>{title} </h1>
           
        </div>
    );
};

export default TitleHeader;