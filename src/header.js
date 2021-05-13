import React from "react"

function Header(){
    return(
        <header class="header">
            <nav class="navbar navbar-expand-lg fixed-top">
                <div class="container"><a href="#intro" class="navbar-brand scrollTo">MAYANK</a>
                <button type="button" data-toggle="collapse" data-target="#navbarcollapse" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler navbar-toggler-right"><span class="fa fa-bars"></span></button>
                <div id="navbarcollapse" class="collapse navbar-collapse">
                    <ul class="navbar-nav ml-auto">
                    <li class="nav-item"><a href="#intro" class="nav-link link-scroll">Intro</a></li>
                    <li class="nav-item"><a href="#about" class="nav-link link-scroll">About</a></li>
                    {/* <li class="nav-item"><a href="#services" class="nav-link link-scroll">Services</a></li> */}
                    {/* <li class="nav-item"><a href="#testimonials" class="nav-link link-scroll">Testimonials</a></li> */}
                    <li class="nav-item"><a href="#references" class="nav-link link-scroll">My work</a></li>
                    {/* <li class="nav-item"><a href="#customers" class="nav-link link-scroll">Clients</a></li> */}
                    <li class="nav-item"><a href="#contact" class="nav-link link-scroll">Contact</a></li>
                    </ul>
                </div>
                </div>
            </nav>
        </header>,
        document.getElementById('head')
    );
} 

export default Header