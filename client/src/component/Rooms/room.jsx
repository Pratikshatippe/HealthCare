import React, {Component} from 'react';
import './room.css';
import patient from '../../images/patient.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Form, Button } from 'react-bootstrap';
import free from '../../images/free.jpg';

export class Rooms extends Component{
    render(){
        return(
            <form>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Health Care</Navbar.Brand>
                <Form inline>
                    <Button variant="outline-success" className="mr-sm-2">Logout</Button>
                </Form>
            </Navbar>
            
            <div className="main-content">
                <div className="patient">
                    <img src={patient} alt={""} className="patientLogo"/>
                </div>
                <div className="patientroom">
                    <button className="patientRoom">Patients With Rooms</button>
                </div>
                <div className="free">
                    <img src={free} alt={""} className="freeLogo"/>
                </div>
                <div className="freeroom">
                    <button className="freeRoom">Available Rooms</button>
                </div>
            </div>
            </form>
        )
    }
}
 export default Rooms;