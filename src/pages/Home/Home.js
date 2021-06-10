import React, { Component } from "react"

// Icons
import javascriptIcon from "../../assets/icons/javascript.svg"
import htmlIcon from "../../assets/icons/html.svg"
import cssIcon from "../../assets/icons/css.svg"
import gitIcon from "../../assets/icons/git.svg"
import cppIcon from "../../assets/icons/cpp.svg"
import javaIcon from "../../assets/icons/java.svg"
import pythonIcon from "../../assets/icons/python.svg"
import githubIcon from "../../assets/icons/github.svg"
import phpIcon from "../../assets/icons/php.svg"
import reactIcon from "../../assets/icons/react.svg"

// Personal Image
import profile from "../../assets/images/me.jpg"

// Style CSS 3
import "./Home.css"

class Home extends Component {

    render() {
        return (
            <React.Fragment>
                
                <h1 className="titlename">Mayank Mohak | मयंक मोहक</h1>
                <div className="about-me">
                    <div className="about-me__row">
                        <div className="about-me__col-description">
                            <p>I am currently pursuing <strong>Bachelors of Technology</strong> in the field of Computer Science and Engineering. I am skilled in domain of <strong>Frontend Development</strong>, <strong>Backend Development</strong>, <strong>Problem Solving</strong> and <strong>Data Structure & Algorithms</strong>.</p> 
                            {/* I regularly do <strong>Competitive Coding</strong> and regular at <strong><a href="https://www.codechef.com/users/mayankmohak">CodeChef</a></strong> and <strong><a href="http://codeforces.com/profile/mayankmohak">Codeforces</a></strong>. On <strong><a href="https://www.hackerrank.com/mayankmohak">HackerRank</a></strong> completed <strong>C</strong> and <strong>JAVA</strong> language Problem Set.</p> */}

                            <p>I am a <strong>Team Player</strong> and love Team Work.</p>

                            {/* <p>In Co-Curricular Activities I am a good chess player and won awards at inter-school level. Outdoor Sports are my first Preferance. </p> */}
                            
                        </div>
                        <div className="about-me__col-image">
                            <img src={profile} alt="my-profile" className="about-me__col-image__profile-image" />
                        </div>
                    </div>
                </div>

                <div className="title"> &nbsp; SKILLS</div>
                <div className="skills">
                    <div className="skills__container-wrapper">
                        <div className="skills__container-wrapper__skills-flex">
                            <div className="skills__container-wrapper__skills-flex__icon-container">
                                <img src={htmlIcon} alt="HTML Icon" />
                                <span>HTML</span>

                            </div>
                            <div className="skills__container-wrapper__skills-flex__icon-container">
                                <img src={cssIcon} alt="CSS3 Icon" />
                                <span>CSS</span>

                            </div>
                            <div className="skills__container-wrapper__skills-flex__icon-container">
                                <img src={javascriptIcon} alt="JS Icon" />
                                <span>Javascript</span>

                            </div>
                            <div className="skills__container-wrapper__skills-flex__icon-container">
                                <img src={reactIcon} alt="ReactJS Icon" />
                                <span>ReactJS</span>

                            </div>
                        </div>

                        <div className="skills__container-wrapper__skills-flex">
                            <div className="skills__container-wrapper__skills-flex__icon-container">
                                <img src={cppIcon} alt="C++ Icon" />
                                <span>C / C++</span>
                                
                            </div>
                            <div className="skills__container-wrapper__skills-flex__icon-container">
                                <img src={javaIcon} alt="JAVA Icon" />
                                <span>JAVA</span>

                            </div>
                            <div className="skills__container-wrapper__skills-flex__icon-container">
                                <img src={pythonIcon} alt="Python Icon" />
                                <span>PYTHON</span>
                                
                            </div>
                            <div className="skills__container-wrapper__skills-flex__icon-container">
                                <img src={phpIcon} alt="PHP Icon" />
                                <span>PHP</span>

                            </div>
                        </div>

                        <div className="skills__container-wrapper__skills-flex">
                            <div className="skills__container-wrapper__skills-flex__icon-container">
                                <img src={gitIcon} alt="Git Icon" />
                                <span>Git</span>

                            </div>
                            <div className="skills__container-wrapper__skills-flex__icon-container">
                                <img src={githubIcon} alt="GitHub Icon" />
                                <span>GitHub</span>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Home
