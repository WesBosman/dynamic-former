import React from 'react';

export default function Circle(props){
    return (
        <g fill={props.fill} stroke={props.stroke} strokeWidth={props.strokeWidth}>
            <circle cx={props.cx} cy={props.cy} r={props.radius}/>
        </g>
    )
}