import React from "react"

export default function Switcher(props){
    const [isSwitched, setIsSwitched] = React.useState(true)
    const [switcherStyles, setSwitcherStyles] = React.useState({
        left: props.left,
        backgroundColor: "#047857"
    })
    const [switcherCircleStyles, setSwitcherCircleStyles] = React.useState({
        left: "25px",
        backgroundColor: "#D9D9D9"
    })

    function doSwitcherFunctions(){
        activateSwitcher()
        props.func()
    }

    React.useEffect(function(){
        if (!isSwitched){ 
            setSwitcherStyles(prevSwitcherStyles => ({
                ...prevSwitcherStyles,
                backgroundColor: props.isDarkOn ? "#D5D4D8" : "#1F2937" 
            }))
            setSwitcherCircleStyles(prevSCS => ({
                left: "7px",
                backgroundColor: props.isDarkOn ? "#374151" : "#D9D9D9"
            }))
        }else{
            setSwitcherStyles(prevSwitcherStyles => ({
                ...prevSwitcherStyles,
                backgroundColor: "#047857"
            }))
            setSwitcherCircleStyles(prevSCS => ({
                left: "25px",
                backgroundColor: "#D5D4D8"
            }))
        }    
    }, [props.isDarkOn])
    

    function activateSwitcher(){
        if (isSwitched){ 
            setSwitcherStyles(prevSwitcherStyles => ({
                ...prevSwitcherStyles,
                backgroundColor: props.isDarkOn ? "#D5D4D8" : "#1F2937" 
            }))
            setSwitcherCircleStyles(prevSCS => ({
                left: "7px",
                backgroundColor: props.isDarkOn ? "#374151" : "#D9D9D9"
            }))
            setIsSwitched(!isSwitched)
        }else{
            setSwitcherStyles(prevSwitcherStyles => ({
                ...prevSwitcherStyles,
                backgroundColor: "#047857"
            }))
            setSwitcherCircleStyles(prevSCS => ({
                left: "25px",
                backgroundColor: "#D5D4D8"
            }))
            setIsSwitched(!isSwitched)
        }
    }

    return(
        <div class="switcher" onClick={doSwitcherFunctions} style={switcherStyles}>
            <div class="switcher-circle" style={switcherCircleStyles}></div>
        </div>
    )
}