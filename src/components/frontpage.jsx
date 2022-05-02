import React from "react";
import './styles.css'

function Frontpage(){
    return (
        <div className="frontcontent">
            <img src="https://uploads-ssl.webflow.com/61d4b50a3b130a78a63644fe/61e6080aafbc9fa3fa29918c_Ellipse%2020.svg" style={{width:"30%"}} alt={"ring"}></img>
            <div className="ringtext">
                <br></br><br></br>
                <h1>HENUSHAN BALACHANDRAN</h1>
                <h2>Software Engineer</h2>
                <img src="https://uploads-ssl.webflow.com/61d4b50a3b130a78a63644fe/61e57b2ee61e3fe22910c4cc_Rectangle%205.svg" alt={"line"}></img>
                <h3>Ontario, Canada</h3>
                <h4>Contact</h4>
            </div>
        </div>
    )
}

export default Frontpage;