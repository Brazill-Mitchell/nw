import React from "react"
import mapImg from "../assets/screenshotWwwgooglecom20200725000755.png"
import Fade from "react-reveal/Fade"

function Map(){

    const mapUrl = "https://www.google.com/"
    

    const mapStyle ={
        height: "10%",
        width: "100%",
        cursor: "pointer"
    }

    return(
        <Fade>
            <a href={mapUrl}>
                <img src={mapImg} alt="" className="mt-5" style={mapStyle}></img>
            </a>
        </Fade>
        
    )
}

export default (Map)