import React from "react";
import Mainpage from "./components/mainpage.jsx";
import About from "./components/about.jsx"
import Project from './components/projects.jsx'

function App(){
  return (
    <div>
      <Mainpage/>
      <About />
      <Project/>
    </div>
  );
}

export default App
