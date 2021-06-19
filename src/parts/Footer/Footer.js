import React, { Component } from "react";

import githubIcon from "../../assets/icons/github.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import mailIcon from "../../assets/icons/mail.svg";
import codechefIcon from "../../assets/icons/codechef.png"
import codeforceIcon from "../../assets/icons/codeforces.jpg"
import hackerrankIcon from "../../assets/icons/hackerrank.png"

import  "./Footer.css"

class Footer extends Component {

    render() {
        return (
            <div className="footer-container-wrapper">
                <p className="footer-container-wrapper__footer-role">Mayank Mohak - OpenSource Enthusiast</p>
                <div className="footer-container-wrapper__footer-social-links">
                    <a  href="https://github.com/mayankmohak" target="_blank" rel="noreferrer">
                        <img src={githubIcon}  alt="My Github Page" />
                    </a>
                    <a href="https://www.linkedin.com/in/mayankmohak/" target="__blank" rel="noreferrer">
                        <img src={linkedinIcon}  alt="My Linkedin Page" />
                    </a>
                    <a href="mailto:mayank8199@gmail.com" target="__blank" rel="noreferrer">
                        <img src={mailIcon}  alt="Send me email" />
                    </a>
                    <a href="https://www.codechef.com/users/mayankmohak" target="__blank" rel="noreferrer">
                        <img src={codechefIcon}  alt="CodeChef" />
                    </a>
                    <a href="https://codeforces.com/profile/mayankmohak" target="__blank" rel="noreferrer">
                        <img src={codeforceIcon}  alt="CodeForces" />
                    </a>
                    <a href="https://hackerrank.com/mayankmohak" target="__blank" rel="noreferrer">
                        <img src={hackerrankIcon}  alt="HackerRank" />
                    </a>
                </div>
            </div>
        )
    }
}

export default Footer
