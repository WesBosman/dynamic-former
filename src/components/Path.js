import React from 'react'
import Circle from './Circle'

export default function Path(props){
    return(
        <svg style={{position: 'absolute'}} width={window.screen.width} height={window.screen.height} xmlns="http://www.w3.org/2000/svg">
            <Circle stroke="dodgerblue"
                fill="dodgerblue" 
                cx={props.x1} 
                cy={props.y1} 
                radius={12}/>

            <path d={`M ${props.x1 || 0} ${props.y1 || 0} L ${props.x2 || 0} ${props.y2 || 0}`} 
                fill="dodgerblue" stroke="dodgerblue" strokeWidth="7px"/>

            <Circle stroke="dodgerblue" 
                fill="dodgerblue"
                cx={props.x2} 
                cy={props.y2} 
                radius={12}/>
        </svg>
    )
}