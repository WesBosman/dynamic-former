import React from 'react';

export default function Viewbox(props){
    console.log("Props: ", props);

    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500">
            {props.children}
        </svg>
    );
}