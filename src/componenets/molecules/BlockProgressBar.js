import React from 'react';
import { BlockProgressFilter } from '../atoms';

const BlockProgressBar = (props) => {
    const style = {
        paddingLeft: `${props.percentage - 5}%`,
    }
    return (
        <div className="progress">
            <div className="progress-percentage" style={style}>{props.percentage}%</div>
            <div className="progress-bar">
                <BlockProgressFilter percentage={props.percentage}/>
            </div>
        </div>
    );
};

export default BlockProgressBar;