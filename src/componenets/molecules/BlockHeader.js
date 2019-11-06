import React from 'react';
import { BlockImage } from '.';
import { BlockDetailButton } from '../atoms';
import "../../resources/sass/home/BlockHeader.scss";

const BlockHeader = () => {
    return (
        <div className="block-header">
            <BlockImage/>
            <BlockDetailButton/>
        </div>
    );
};

export default BlockHeader;