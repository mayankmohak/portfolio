import React, { Component } from 'react'

import githubIcon from "../../assets/icons/github.svg"
import websiteIcon  from "../../assets/icons/website.png"

import './Card.css'

class Card extends Component {
    render() {
        const check = this.props.hostlink;
        if(check){
            this.website = <a href={this.props.hostlink} ><img id="shadow" src={websiteIcon} height="50px" alt="Website"></img></a>;
        }

        const idx = this.props.id;
        const pos = (Number(idx)%2===0) ? true : false;

        return (
          <React.Fragment>
            <div className="col-md-3 card seperate shadow-lg zoom">
                <img src={this.props.img} alt="Project Thumbnail" className="card-img-top" height="230px"/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.projectname}</h5>
                    <p className="card-text">{this.props.details}</p>
                    {this.website}
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <a href={this.props.gitlink} ><img id="shadow" src={githubIcon} height="50px" alt="GitHub"></img></a>
                </div>
            </div>
          </React.Fragment>  
        );
    }
}

export default Card