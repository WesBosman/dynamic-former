import React from 'react';

export default function Rectangle(props){
    return (
        <g fill={props.fill} 
            stroke={props.stroke} 
            stroke-width={props.strokeWidth}>
            <rect x={props.x} 
                width={props.width} 
                height={props.height}
                rx={props.radius}
            />
        </g>
    )
}