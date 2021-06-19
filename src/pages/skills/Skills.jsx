import React, { Component } from "react"

// Icons
// import javascriptIcon from "../../assets/icons/javascript.svg"
// import htmlIcon from "../../assets/icons/html.svg"
// import cssIcon from "../../assets/icons/css.svg"
// import gitIcon from "../../assets/icons/git.svg"
// import cppIcon from "../../assets/icons/cpp.svg"
// import javaIcon from "../../assets/icons/java.svg"
// import pythonIcon from "../../assets/icons/python.svg"
// import githubIcon from "../../assets/icons/github.svg"
// import phpIcon from "../../assets/icons/php.svg"
// import reactIcon from "../../assets/icons/react.svg"

// Style CSS 3
import "./Skills.css"

class Skills extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="title"> &nbsp; SKILLS</div>
        <div id="skills">
          <div class="skills">
            <h2 class="heading">My Domain</h2>
            <ul>
              <li>Web Development</li>
              <li>Frontend</li>
              <li>Backend</li>
              <li>R-DBMS</li>
              <li>Object Orieted Programming</li>
              <li>Problem Solving</li>
              <li>Data Structures & Algorithms</li>
              <li>Competitive Coding</li>
              <li>Open Source</li>
              <li>Git & GitHub</li>
            </ul>
          </div>

          <div class="skills">
            <h2 class="heading">Languages</h2>
            <ul>
              <li>C++</li>
              <li>C</li>
              <li>Java</li>
              <li>JavaScript</li>
              <li>Python</li>
              <li>PHP</li>
              <li>HTML 5</li>
            </ul>
          </div>

          <div class="skills">
            <h2 class="heading">Technologies</h2>
            <ul>
              <li>ReactJS</li>
              <li>BootStrap</li>
              <li>CSS 3</li>
              <li>GitHub Actions</li>
              <li>tkinter (PYTHON)</li>
              <li>Swing (java)</li>
              <li>AWT (java)</li>
              <li>Numpy</li>
              <li>Pandas</li>
              <li>AIML</li>
              <li>MySQL</li>
              <li>SQLite 3</li>
            </ul>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Skills