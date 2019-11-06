import React from 'react';

const BlockProgressFilter = (props) => {
    return (
        <div className="filter"  style={{width:`${props.percentage}%`}}/>
    );
};

export default BlockProgressFilter;