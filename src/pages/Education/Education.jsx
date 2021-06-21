import React, { Component } from "react";

import "./Education.css"

class Education extends Component {
  render() {
    return (
      <React.Fragment>
        <br /><br /><br />  
        <div className="title"> &nbsp; EDUCATION</div>
        <br /><br />
        <div class="timeline">
          <div class="timeline-container left">
            <div class="timeline-content">
              <h2>Bachelor of Technology in Computer Science</h2>
              <h4>@ GIET University</h4>
              <p>2019 - 2023 (present)</p>
              <p><strong>C.G.P.A.</strong> 9.0 (current)</p>
            </div>
          </div>
          <div class="timeline-container right">
            <div class="timeline-content">
              <h2>Higher Secondary Enducation</h2>
              <h4>@ Paramount Acedemy (CBSE)</h4>
              <p>2016 - 2018 &#10004;</p>
              <p><strong>Percentage</strong> 63%</p>
            </div>
          </div>
          <div class="timeline-container left">
            <div class="timeline-content">
              <h2>Secondary Enducation</h2>
              <h4>@ G. D. Mother International School (CBSE)</h4>
              <p>2016 &#10004;</p>
              <p><strong>C.G.P.A.</strong> 9.2</p>
            </div>
          </div>
        </div>
        <br /><br />
      </React.Fragment>
    )
  }
}

export default Education;
