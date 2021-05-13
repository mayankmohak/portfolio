import React from "react"
import ReactDom from "react-dom"
import "./vendor/bootstrap/css/bootstrap.min.css"
import "./vendor/font-awesome/css/font-awesome.min.css"
// import "https://fonts.googleapis.com/css?family=Roboto+Slab:400,700%7CRoboto:400,700,300"
import "./vendor/owl.carousel/assets/owl.carousel.css"
import "./vendor/owl.carousel/assets/owl.theme.default.css"
import "./vendor/animate.css/animate.css"
import "./css/style.default.css"
import "./css/custom.css"


import Header from "./header"
import IntroImg from "./intro-img"
import About from "./about"

ReactDom.render(<Header/>,document.getElementById('head'));
ReactDom.render(<IntroImg/>,document.getElementById('intro-img'));
ReactDom.render(<About/>,document.getElementById('about'));