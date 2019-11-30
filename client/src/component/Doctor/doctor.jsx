import React, {Component} from 'react';
import './doctor.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export class Doctor extends Component{
    constructor(){
        super()
        this.state={
            doctor:[
                {
                    Designation:"" 
                }
            ]
            // Designation:'',
            // Experience:'',
            // Degree:'',
            // CabinNo:''
        }
        this.handleShow=this.handleShow.bind(this)
    }  
    handleShow(e){
        e.preventDefault()
        axios.get('http://localhost:8800/doctor')
        .then(response=>{
                console.log(response.data);
                this.setState({doctor:response.data[0].Designation});
            });
        }

    render(){
        return(
            <form>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Health Care</Navbar.Brand>
                    <Form inline>
                        <Link to="/login"><Button variant="outline-success" className="mr-sm-2">Logout</Button></Link>
                    </Form>
                </Navbar>
                <div className="main">
                    <h1>Doctor Details</h1>
                    <div><button onClick={this.handleShow}>show</button></div>
                    <p>{this.state.Doctor}</p>
                </div>
            </form>
        )
    }
}

export default Doctor;
