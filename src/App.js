import React from "react"
import Passwords from "./components/Passwords"
import Slider from "./components/Slider"
import Switcher from "./components/Switcher"
import themeIconLV from './img/moon-icon-light.png'
import themeIconDV from './img/moon-icon-dark.png'
import charactersKits from "./utils/charactersKits"

export default function App(){
    const [chars, setChars] = React.useState(charactersKits)
    const lenOfChars = chars.length
    const [isThemeChanged, setIsThemeChanged] = React.useState(false)
    const [isNumEnable, setIsNumEnable] = React.useState(true)
    const [isSymbEnable, setIsSymbEnable] = React.useState(true)
    const [rangeValue, setRangeValue] = React.useState(10)
    const [password1, setPassword1] = React.useState("")
    const [password2, setPassword2] = React.useState("")

    function toggleTheme(){
        setIsThemeChanged(!isThemeChanged)
    }
    function toggleNumsFunc(){
        setIsNumEnable(!isNumEnable)
    }
    function toggleSymbFunc(){
        setIsSymbEnable(!isSymbEnable)
    }
    function changePasswordLength(event){
        const {value} = event.target
        setRangeValue(value)
    }

    React.useEffect(function(){
        if(isNumEnable && isSymbEnable){
            setChars(charactersKits[0])
        }else if (isNumEnable && !isSymbEnable){
            setChars(charactersKits[1])
        }else if (!isNumEnable && isSymbEnable){
            setChars(charactersKits[2])
        }else if (!isNumEnable && !isSymbEnable){
            setChars(charactersKits[3])
        }
    }, [isNumEnable, isSymbEnable])
    

    function startGeneratingPasswords(){
        generationOfFirstPassword()
        generationOfSecondPassword()
    }
    function generationOfFirstPassword(){
        setPassword1("")
        for (let i = 0; i < rangeValue; i++){
            let randNum = Math.floor(Math.random()*lenOfChars)
            setPassword1(prevPassword1 =>
                prevPassword1+chars[randNum]
            )
        }
    }
    function generationOfSecondPassword(){
        setPassword2("")
        for (let i = 0; i < rangeValue; i++){
            let randNum = Math.floor(Math.random()*lenOfChars)
            setPassword2(prevPassword2 =>
                prevPassword2+chars[randNum]
            )
        }
    }


    return(
        <div 
            className='container' 
            style={{
                backgroundColor: !isThemeChanged ? "#1F2937" : "#ECFDF5"
        }}>
            <div className="theme-switcher">
                <Switcher 
                    func={toggleTheme}
                    isDarkOn={!isThemeChanged}
                />
                <img 
                    src={isThemeChanged ? themeIconDV : themeIconLV} 
                    className="theme-icon"
                />
            </div>
            <div className='generator-main'>
                <h1 style={{color: !isThemeChanged ? "white" : "#2B283A"}}>Generate a <br/> <span className='highlight'>random password</span></h1>
                <p style={{color: !isThemeChanged ? "#D5D4D8" : "#6B7280"}}className='tagline'>Never use insecure passwords</p>
                <div className="password-options">
                    <button 
                        className='generate-button'
                        onClick={startGeneratingPasswords}
                    >Generate passwords</button>
                    <Slider 
                        isDarkOn={!isThemeChanged}
                        func={changePasswordLength}
                        rangeValue={rangeValue}
                    />
                </div>
            </div>
            <hr/>
            <div className='passwords-panel'>
                <Passwords
                    toFirstPassword={password1}
                    toSecondPassword={password2}
                    switchFunctions={[toggleNumsFunc, toggleSymbFunc]}
                    isDarkOn={!isThemeChanged}
                />
            </div>
        </div>
    )
}