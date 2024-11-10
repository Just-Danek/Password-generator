import React from "react"
import Modal  from "./Modal";

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
            <Modal styles={
                {
                    opacity: isCopied ? 1 : 0,
                    top: "90px",
                    left: `${window.innerWidth*0.5 - 75}px`
                }
            }/>     
        </div>
    )
}