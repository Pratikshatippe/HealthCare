import React, {Component} from 'react';
import './doctor.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Form, Button } from 'react-bootstrap';

export class Doctor extends Component{
    constructor(){
        super()
        this.state={
            doctor:[]
            // Designation:'',
            // Experience:'',
            // Degree:'',
            // CabinNo:''
        }
        this.handleShow=this.handleShow.bind(this)
    }  
    handleShow(){
        axios.get('http://localhost:8800/doctor')
        .then(response=>{
                console.log(response.data);
                this.setState({doctor:response.data});
            });
        }

    render(){
        return(
            <form>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Health Care</Navbar.Brand>
                    <Form inline>
                        <Button variant="outline-success" className="mr-sm-2">Logout</Button>
                    </Form>
                </Navbar>
                <div className="main">
                    <h1>Doctor Details</h1>
                    <div><button onClick={this.handleShow}>show</button></div>
                    {this.state.map(i => {
                        return(
                            <div>
                                <p>{i.Name}</p>
                                <p>{i.Designation}</p>
                                <p>{i.Experience}</p>
                                <p>{i.Degree}</p>
                                <p>{i.CabinNo}</p>
                            </div>
                        )
                    })}
                </div>
            </form>
        )
    }
}

export default Doctor;
