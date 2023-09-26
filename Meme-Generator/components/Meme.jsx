import React from "react"

export default function Meme(){
    return(
        <>
            <form>
                <div className="input--fields">
                    <input type = "text" className="textfield1"/>
                    <input type = "text" className="textfield2"/>
                </div>
                <button type = "submit" className="form--button"><img src = "../public/images/button-img.png" /></button>
            </form> 
        </>
    )   
}