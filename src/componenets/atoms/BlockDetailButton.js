import React from 'react';
import "../../resources/sass/home/BlockDetailButton.scss";
import more from "../../resources/images/home/more.svg";

const BlockDetailButton = () => {
    return (
        <img className="block-detail" src={more}/>
    );
};

export default BlockDetailButton;