import React from "react";
import './styles.css';


function Heading(){
    return(
        <div>
            <ul style={{ fontWeight:"700"}}>
                <li><a style={{color: "#f76236"}}>Contact</a></li>
                <li><a>Projects</a></li>
                <li><a>About</a></li>
                <li><a>Home</a></li>
            </ul>
        </div>
    )
}

export default Heading