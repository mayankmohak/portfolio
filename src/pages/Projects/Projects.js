import React, { Component } from 'react'

import Card from '../../components/Card/Card'

// Images
import attendanceImg from "../../assets/images/attendance/main.jpg"
import sortingImg from "../../assets/images/sort/animatesort.jpg"
import buysellImg from "../../assets/images/buysell/home.jpg"
import srmsImg from "../../assets/images/srms/rms-1.jpg"
import spinImg from "../../assets/images/spin/spin.jpg"
import calImg from "../../assets/images/cal/cal.jpg"

// Style
import "./Projects.css"

class Projects extends Component {
  

    render() {
        return (
            <React.Fragment>
            <div className="title"> &nbsp; PROJECTS</div>
            <div className="container">
                <div className="row">
                    <Card
                        id = "1"
                        projectname="Sorting Visualizer" 
                        details="Visual Effects for Sorting Algorithms."
                        img={sortingImg}
                        gitlink="https://github.com/mayankmohak/animate-sort/"
                        hostlink="https://mayankmohak.github.io/animate-sort/"
                    />
                    <Card
                        id = "2"
                        projectname="Attendance Recorder" 
                        details="A Quik way to Record Attendence during online classes."
                        img={attendanceImg}
                        gitlink="https://github.com/mayankmohak/attendance-recorder"
                    />
                    <Card
                        id = "3"
                        projectname="Buy Sell Portal" 
                        details="This is a buy sell portal intended for buying selling products in college hostels."
                        img={buysellImg}
                        gitlink="https://github.com/mayankmohak/buysell/"
                        hostlink="http://buy-sell.freecluster.eu/buy-sell/?i=1"
                    />
                    <Card
                        id = "4"
                        projectname="Student Result Management System" 
                        details="This is a result managing portal that can be used easily by schools to Add, edit, and delete results."
                        img={srmsImg}
                        gitlink="https://github.com/mayankmohak/Student-Result-Management-System"
                        hostlink="http://result-board.infinityfreeapp.com/rms/index.php"
                    />
                    <Card
                        id = "5"
                        projectname="Spin Wheel" 
                        details="This is simple game made in JavaScript. Different types of animations are being created in java script to make it look attractive though it is a fun activity."
                        img={spinImg}
                        gitlink="https://github.com/mayankmohak/SpinWheel-Santa"
                        hostlink="https://github.com/mayankmohak/SpinWheel-Santa"
                    />
                    <Card
                        id = "6"
                        projectname="Calculator" 
                        details="This is simple calculator made in JavaScript."
                        img={calImg}
                        gitlink="https://github.com/mayankmohak/calculator"
                        hostlink="https://github.com/mayankmohak/calculator"
                    />
                    
                </div>
            </div>
            </React.Fragment>
        )
    }
}

export default Projects
