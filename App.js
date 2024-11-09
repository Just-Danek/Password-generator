import React from "react"
import Passwords from "./components/Passwords"
import characters from "./characters"

export default function App(){
    const chars = characters
    const lenOfChars = chars.length
    const [password1, setPassword1] = React.useState("")
    const [password2, setPassword2] = React.useState("")
    
    
    function startGeneratingPasswords(){
        generationOfFirstPassword()
        generationOfSecondPassword()
    }
    function generationOfFirstPassword(){
        setPassword1("")
        for (let i = 0; i < 15; i++){
            let randNum = Math.floor(Math.random()*lenOfChars)
            setPassword1(prevPassword1 =>
                prevPassword1+chars[randNum]
            )
        }
    }
    function generationOfSecondPassword(){
        setPassword2("")
        for (let i = 0; i < 15; i++){
            let randNum = Math.floor(Math.random()*lenOfChars)
            setPassword2(prevPassword2 =>
                prevPassword2+chars[randNum]
            )
        }
    }
    
    return(
        <div className='container'>
            <div className='generator-main'>
                <h1>Generate a <br/> <span className='highlight'>random password</span></h1>
                <p className='tagline'>Never use an insecure passwords</p>
                <button 
                    className='generate-button'
                    onClick={startGeneratingPasswords}
                >Generate passwords</button>
            </div>
            <hr/>
            <div className='passwords-panel'>
                
                <Passwords
                    toFirstPassword={password1}
                    toSecondPassword={password2}
                />
            </div>
        </div>
    )
}