import React from "react"

export default function Slider(props){
    return(
        <div className="slider">
            <input 
                name="slider" 
                type="range" 
                min="5" max="15" 
                value={props.rangeValue} 
                onChange={props.func}
                style={{background: props.isDarkOn ? "" : "#10B981"}}
            />
            <p style={{color: props.isDarkOn ? "" : "#6B7280"}}>Password length: <span>{props.rangeValue}</span></p>
        </div>
    )
}