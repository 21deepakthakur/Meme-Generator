import React from "react"

export default function Meme(props){

    return(
        <>
            <div className="form">
                <div className="input--fields">
                    <input 
                    type = "text"
                    className="textfield1"
                    placeholder="Top Text"
                    name = "topText"
                    onChange = {props.handleTextChange}
                    value = {props.topText}
                    />
                    <input
                    type = "text" 
                    className="textfield2"
                    name = "bottomText"
                    placeholder="Bottom Text"
                    onChange = {props.handleTextChange}
                    value = {props.bottomText}
                    />
                </div>
                <button
                    className="form--button"
                    onClick = {props.handleImageChange}
                ><img src = "../public/images/button-img.png" /></button>
            </div> 
        </>
    )   
}
