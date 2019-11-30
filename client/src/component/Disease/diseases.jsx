import React, {Component} from 'react';
import './diseases.css';
import disease from '../../images/disease.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export class Diseases extends Component{
    render(){
        return(
            <form>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" id="nav">
                    <Navbar.Brand href="#home">Health Care</Navbar.Brand>
                    <Form inline>
                        <Link to="/login"><Button variant="outline-success" className="mr-sm-2">Logout</Button></Link>
                    </Form>
                </Navbar>
                <div className="main-content">
                    <h1>Add New Disease</h1>
                    <div className="disease">
                        <img src={disease} alt={""} className="diseaselogo"/>
                    </div>
                    <div className="diseasename">
                        <input type="text" placeholder="Disease Name" className="diseaseName"/>
                    </div>
                    <div className="remark">
                        <input type="text" placeholder="Remark" className="Remark"/>
                    </div>
                    <div className="adddisease">
                        <button className="addDisease">Add Disease</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default Diseases;
