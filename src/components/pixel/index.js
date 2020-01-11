import React from 'react';
import "../../App.css";



const Pixel = function (props)  {
    const createClassName = function () {
        return props.bAlive === true ? "Pixel alive" : "Pixel";
    }

    return (
        <div className={createClassName()} onClick={props.onClick}>

        </div>
    )
}

export default Pixel