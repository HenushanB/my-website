import React from "react";
import './styles.css';

function Projects(){
    var imgIndex = 0;
    const theImages = [require('../components/images/pythongame1.png'),require('../components/images/pythongame2.png')];
    return (
        <div style = {{backgroundColor: "#181818", overflow: "hidden"}}>
            <h2>Projects</h2>
            <div style={{textAlign: "center"}}>
                <img src="https://uploads-ssl.webflow.com/61d4b50a3b130a78a63644fe/61e57b2ee61e3fe22910c4cc_Rectangle%205.svg" alt={"line"} style={{width: "25"}}></img>
            </div>
            <div style={{textAlign: "center", }}>
                <div className="projectimg">
                    <h2>Discord Bot</h2>
                    <img src= {require('../components/images/discordbot.png')} alt="discordbot" className="projectimg2"/>
                </div>
                <div className="projectimg">
                    <h2>Arcade Game</h2>
                    <img src= {require('../components/images/pythongame1.png')} alt='pythongame' className="projectimg2"/>
                </div>
                <div className="projectimg">
                    <h2>Q-arm Project</h2>
                    <img src= {require('../components/images/qarm.png')} alt='pythongame' className="projectimg2"/>
                </div>
                <div className="projectimg">
                    <h2>Personal Website</h2>
                    <img src= {require('../components/images/website.png')} alt='pythongame' className="projectimg2"/>
                </div>
            </div>
            
            
        </div>
    )
}

export default Projects; 