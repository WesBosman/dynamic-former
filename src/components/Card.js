import React from 'react'

export default function Card(props){
    return(
        <li className="flex m-2 p-2 bg-gray-50 rounded">
            <div className="flex flex-col w-3/5">
                <div className="flex justify-between py-2">
                    <label>Key</label>
                    <input type="text" 
                        value={props.objIndx} 
                        className="text-center"
                        />
                </div>
                <div className="flex justify-between py-2">
                    <label>Value</label>
                    <input type="text" 
                        value={props.text}
                        />
                </div>
            </div>
        </li>
    )
}