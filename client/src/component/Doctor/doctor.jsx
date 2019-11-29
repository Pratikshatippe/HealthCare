import React, {Component} from 'react';
import './doctor.css';
import axios from 'axios';

export class Doctor extends Component{
    constructor(){
        super()
        this.state={
            Name:'',
            Designation:'',
            Experience:'',
            Degree:'',
            CabinNo:''
        }
    }  
    handleShow(){
        axios.get('http://localhost:8800/doctor')
            .then(response=>{
                console.log("here")
                // console.log(response);
                this.setState({doctorName:response.Name});
            })
        }

    render(){
        return(
            <div className="main">
                <h1>Doctor Details</h1>
                <div><button onClick={this.handleShow}>show</button></div>
                <p id="doctorName">{this.state.Name}</p>
                <p id="doctorDesignation">{this.state.Designation}</p>
                <p id="doctorExperience">{this.state.Experience}</p>
                <p id="doctorDegree">{this.state.Degree}</p>
                <p id="doctorCabinNo">{this.state.CabinNo}</p>
            </div>
        )
    }
}

export default Doctor;