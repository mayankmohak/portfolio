import React from "react"
import "./vendor/bootstrap/css/bootstrap.min.css"
import "./vendor/font-awesome/css/font-awesome.min.css"
// import "https://fonts.googleapis.com/css?family=Roboto+Slab:400,700%7CRoboto:400,700,300"

function Header(){
    return(
        <header className="header">
            <nav className="navbar navbar-expand-lg fixed-top">
                <div className="container">
                    <a href="#intro" className="navbar-brand scrollTo">MAYANK</a>
                    <button type="button" data-toggle="collapse" data-target="#navbarcollapse" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler navbar-toggler-right"><span className="fa fa-bars"></span></button>
                    <div id="navbarcollapse" className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item"><a href="#intro" className="nav-link link-scroll">Intro</a></li>
                            <li className="nav-item"><a href="#about" className="nav-link link-scroll">About</a></li>
                            {/* <li className="nav-item"><a href="#services" className="nav-link link-scroll">Services</a></li> */}
                            {/* <li className="nav-item"><a href="#testimonials" className="nav-link link-scroll">Testimonials</a></li> */}
                            <li className="nav-item"><a href="#references" className="nav-link link-scroll">My work</a></li>
                            {/* <li className="nav-item"><a href="#customers" className="nav-link link-scroll">Clients</a></li> */}
                            <li className="nav-item"><a href="#contact" className="nav-link link-scroll">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
} 

export default Header