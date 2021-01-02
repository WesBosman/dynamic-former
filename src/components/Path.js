import React from 'react'

export default function Path(props){
    return(
        <path d={`M${props.x1} ${props.y1} L ${props.x2} ${props.y2}`} />
    )
}