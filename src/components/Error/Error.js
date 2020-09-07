import React from 'react';
import Img from './ErrorImg/error.jpg';
import "./Error.css"

const Error = () => {
    return (
        <div className = "errorContainer">
            <img src={Img} alt=""/>
        </div>
    );
};

export default Error;