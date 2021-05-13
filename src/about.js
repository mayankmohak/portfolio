import React from "react"
import "./css/introimg.css"

function About(){
    return (
        <section id="about" className="about-section">
        <div className="container">
            <header className="text-center">
            <h2 data-animate="fadeInDown" className="title">About me</h2>
            </header>
            <div data-animate="fadeInUp" className="col-sm-6 mx-auto mt-5"><img src="img/about.jpg" alt="This is me - IT worker" className="image rounded-circle img-fluid"></img></div><br></br>
            <div className="row">
            <div data-animate="fadeInUp" className="col-lg-6">
                <p>I am currently pursuing <strong>Bachelors of Technology</strong> in the field of Computer Science and Engineering. I have skills of <strong>Web Development</strong>, I regularly do <strong>Competitive Coding</strong> and also 3 star at <strong><a href="https://www.codechef.com/users/mayankmohak">CodeChef</a></strong>. I am also regular on <strong><a href="http://codeforces.com/profile/mayankmohak">Codeforces</a></strong>. On <strong><a href="https://www.hackerrank.com/mayankmohak">HackerRank</a></strong> completed C and java language course.</p>
                <p>In Co-Curricular activities I am a good chess player and won awards at inter-school level.</p>
            </div>
            <div data-animate="fadeInUp" className="col-lg-6">
                <div className="skill-item">
                    <div className="progress-title">Competitive Programming  -  <i style={{"font-size": "12px"}}>(C / C++)</i></div>
                    <div className="progress">
                        <div role="progressbar" style={{"width": "70%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" className="progress-bar progress-bar-skill5"></div>
                    </div>
                </div>
                <div className="skill-item">
                <div className="progress-title">OOPS  -  <i style={{"font-size" : "12px"}}>(java)</i></div>
                <div className="progress">
                    <div role="progressbar" style={{"width" : "65%"}} aria-valuenow="0" aria-valuemin="60" aria-valuemax="100" className="progress-bar progress-bar-skill4"></div>
                </div>
                </div>
                <div className="skill-item">
                <div className="progress-title">DATABASE  -  <i style={{"font-size" : "12px"}}>(mysql)</i></div>
                <div className="progress">
                    <div role="progressbar" style={{"width" : "70%"}} aria-valuenow="70" aria-valuemin="60" aria-valuemax="100" className="progress-bar progress-bar-skill3"></div>
                </div>
                </div>
                <div className="skill-item">
                <div className="progress-title">BACKEND  -  <i style={{"font-size": "12px"}}>(php)</i></div>
                <div className="progress">
                    <div role="progressbar" style={{"width": "65%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" className="progress-bar progress-bar-skill2"></div>
                </div>
                </div>
                <div className="skill-item">
                <div className="progress-title">Frontend  -  <i style={{"font-size": "12px"}}>(HTML, CSS3, JavaScript, bootstrap)</i></div>
                <div className="progress">
                    <div role="progressbar" style={{"width": "70%"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" className="progress-bar progress-bar-skill1"></div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    );
}

export default About