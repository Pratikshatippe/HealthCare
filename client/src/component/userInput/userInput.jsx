import React, {Component} from 'react';
import './userInput.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import axios from 'axios';

export class UserInput extends Component{
    constructor(){
        super();
        this.state={
            username:'',
            selectedOption:''
        }
        this.handleChange=this.handleChange.bind(this);
        
    }
    handleChange(e){
        const {name,value} = e.target
        this.setState({
            [name]:value
        });
    }
    render(){
        return(
            <form>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" id="nav">
                    <Navbar.Brand href="#home">Health Care</Navbar.Brand>
                    <Form inline>
                        <Link to="/login"><Button variant="outline-success" className="mr-sm-2">Logout</Button></Link>
                    </Form>
                </Navbar>
                <div className="user">
                    <div className="Patientname">
                        <label>Username: </label>
                        <input type="text" className="patientname" name="patientname" onChange={this.handleChange}/>
                    </div>
                    <div className="gender">
                        <label>Gender:</label>
                        <input type="radio" value="Female" checked={this.state.selectedOption === 'Female'}/>Female
                        <input type="radio" value="Male" checked={this.state.selectedOption === 'Male'}/>Male
                    </div>
                    <div className="Adddisease">
                        <Link to="/disease"><button className="AddDisease">Add Disease</button></Link>
                        <Link to="/doctor"><button className="nextpage">Done</button></Link>
                    </div>
                </div>
            </form>
        )
    }
}

export default UserInput;
