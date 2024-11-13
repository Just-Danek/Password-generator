import React from "react"

export default function Modal(props){
    const [modalStyles, setModalStyles] = React.useState({
        opacity: 0,
        left: `${window.innerWidth*0.5 - 75}px`,
        top: "90px",
        color: props.isDarkOn ? "#047857" : "#A7F3D0",
        backgroundColor: props.isDarkOn ? "#34D399" : "#059669"
    })

    React.useEffect(function(){
        if (props.isDarkOn){ 
            setModalStyles(prevModalStyles => ({
                ...prevModalStyles,
                opacity: props.isCopied ? 1 : 0,
                color: "#047857",
                backgroundColor: "#34D399" 
            }))
        }else{
            setModalStyles(prevModalStyles => ({
                ...prevModalStyles,
                opacity: props.isCopied ? 1 : 0,
                color: "#A7F3D0",
                backgroundColor: "#059669"
            }))
        }    
    }, [props.isDarkOn, props.isCopied])

    return(
        <div className="modal" style={modalStyles}>
            <h4>Password copied!</h4>
        </div>
    )
}