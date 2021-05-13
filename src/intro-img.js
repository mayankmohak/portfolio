import React from "react"
import "./css/introimg.css"

function IntroImg(){
    return (
        <section id="intro" className="intro-section pb-2 bg-img">
            <div className="container text-center">
                <div data-animate="fadeInDown" className="logo">
        	    <img src="../img/3.svg" alt="logo" width="130"></img><br></br>
        	    <a href="./resume.pdf" className="btn btn-outline-primary"><h4><i className="text-white fa fa-download"> RESUME</i></h4></a>
    	    </div>
            <h1 data-animate="fadeInDown" className="text-shadow mb-5">मयंक मोहक</h1>
            <p data-animate="slideInUp" className="h3 text-shadow text-400"></p>
            </div>
        </section>
    );
}

export default IntroImg