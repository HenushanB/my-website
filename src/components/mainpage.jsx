import React from "react";
import './styles.css';
import Heading from './navbar.jsx';
import Frontpage from './frontpage.jsx';

function Mainpage(){
    return (
        <div className="mainpage">
            <Heading/>
            <Frontpage/>
        </div>
    );
}

export default Mainpage;