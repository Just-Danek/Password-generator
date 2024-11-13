import React from "react"
import Modal  from "./Modal"
import Switcher from "./Switcher"

export default function GeneratorButton(props){
    const [isCopied, setIsCopied] = React.useState(false)

    function copyText(event){
        const {value} = event.target
        if (value === ""){
            return 
        }
        const textToCopy = value;
        navigator.clipboard.writeText(textToCopy);
        setIsCopied(true)
        setTimeout(() => {
            setIsCopied(false)
        }, 2000);
    }

    return(
        <div>
            <input 
                className='first-password'
                name="firstPassword"
                type="text" 
                value={props.toFirstPassword}
                onClick={copyText}
                readonly
            />
            <input 
                className='second-password'
                name="secondPassword"
                type="text" 
                value={props.toSecondPassword}
                onClick={copyText}
                readonly
            />
            <div className="panel-switchers">
                <div className="num-switcher">
                    <Switcher 
                        func={props.switchFunctions[0]}
                        isDarkOn={props.isDarkOn}
                    />
                    <p style={{color: props.isDarkOn ? "white" : "#6B7280"}}>Use numerics</p>
                </div>
                <div className="symb-switcher">
                    <Switcher 
                        func={props.switchFunctions[1]}
                        isDarkOn={props.isDarkOn}
                    />
                    <p style={{color: props.isDarkOn ? "white" : "#6B7280"}}>Use symbols</p>
                </div>
            </div>
            <Modal 
                isDarkOn={props.isDarkOn}
                isCopied={isCopied}
            />     
        </div>
    )
}