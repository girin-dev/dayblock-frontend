import React from 'react';
import {BlockTags, BlockHeader, BlockProgressBar } from '../molecules';
import { BlockTitle, BlockCreateDate} from '../atoms';
import "../../resources/sass/home/Block.scss";

const Block = () => {
    return (
        <div className="home-block">
           <BlockHeader/>
           <BlockTitle/>
           <BlockTags/>
           <BlockProgressBar percentage={10}/>
           <BlockCreateDate/>
        </div>
    );
};

export default Block;