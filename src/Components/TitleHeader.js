import React from 'react';

const TitleHeader = (props) => {
    const { title } = props;

    return (
        <div className="titleHeader">
            
            <h1>{title} </h1>
           
        </div>
    );
};

export default TitleHeader;