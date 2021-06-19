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

// Personal Image
import profile from "../../assets/images/me.jpg"

// Style CSS 3
import "./Home.css"

// Skills
import Skills from "../skills/Skills"

class Home extends Component {

    render() {
        return (
            <React.Fragment>
                <h1 className="titlename">Mayank Mohak | मयंक मोहक</h1>
                <div className="about-me">
                    <div className="about-me__row">
                        <div className="about-me__col-description">
                            <p>I am currently pursuing <strong>Bachelors of Technology</strong> in the field of Computer Science and Engineering at <strong>GIET University</strong>.</p>
                            <p>I am skilled in domain of <strong>Web Development</strong>, <strong>Problem Solving</strong> and <strong>Data Structure & Algorithms</strong>.</p>
                            
                            <p> I regularly do <strong>Competitive Coding</strong> and regular at <strong><a href="https://www.codechef.com/users/mayankmohak">CodeChef</a></strong> and <strong><a href="http://codeforces.com/profile/mayankmohak">Codeforces</a></strong>. On <strong><a href="https://www.hackerrank.com/mayankmohak">HackerRank</a></strong> completed <strong>C</strong> and <strong>JAVA</strong> language Problem Set.</p>

                            <p>I am also an <strong><a href="https://github.com/mayankmohak">OpenSource</a></strong> Enthusiast and had participated in 2 OpenSource events and contributed to 20+ GitHub Repositories and also regularly looking for more.</p>

                            <p>I am a <strong>Fast Learner</strong> and <strong>Team Player</strong> and love Team Work.</p>

                            {/* <p>In Co-Curricular Activities I am a good chess player and won awards at inter-school level. Outdoor Sports are my first Preferance. </p> */}
                            <div className="download-resume">
                                <a target="_blank" href="https://drive.google.com/file/d/1q7ANmeCZXAgt7GbRTl8typxbC_Nt-TeU/view?usp=sharing" rel="noreferrer">
                                <i class="bi bi-eye"></i> RESUME</a>
                            </div>
                        </div>
                        <div className="about-me__col-image">
                            <img src={profile} alt="my-profile" className="about-me__col-image__profile-image" />
                        </div>
                    </div>
                </div>

                <div className="title"> &nbsp; SKILLS</div>
                <Skills />

            </React.Fragment>
        )
    }
}

export default Home
