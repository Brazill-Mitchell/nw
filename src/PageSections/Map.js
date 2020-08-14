import React from "react"
import mapImg from "../assets/screenshotWwwgooglecom20200725000755.png"
import Slide from "react-reveal/Slide"

function Map(){

    const mapUrl = "https://www.google.com/"
    

    const mapStyle ={
        height: "10%",
        width: "100%",
        cursor: "pointer"
    }

    return(
        <Slide left>
            <a href={mapUrl}>
                <img src={mapImg} alt="" className="mt-5" style={mapStyle}></img>
            </a>
        </Slide>
        
    )
}

export default (Map)