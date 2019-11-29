import React, {Component} from 'react';
import './register.css';
import logo from '../../images/register.png';
import axios from 'axios';
// import Login from '../LoginPage/login';
// import { Link, Redirect } from 'react-router-dom';


export class Register extends Component{
    constructor(){
        super();
        this.state = {
            username:'',
            password:'',
            confirmPassword:'',
            page:"currentpage"
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
        const {name,value} = e.target
        this.setState({
            [name]:value
        });
        // let confirmPassword = e.target.name;
        // this.setState({ [confirmPassword]: e.target.value});
    }
    async handleSubmit(){
        const { username, password, confirmPassword }=this.state;
        try {
            const responses = await axios.post('http://localhost:8800/register/userRegister', {
             
                auth:{
                    username:this.state.username,
                    password:this.state.password,
                    confirmPassword:this.state.confirmPassword
                }
            }).then(store=>{
                console.log(store);
                alert("done");
            }) 
    }
        
            catch(err){
                console.log(err);
            }
        }
        
    
    
render(){
    // const { username, password, confirmPassword }=this.state;
    
    return (
            <div className="main-content">
                <h1>Register</h1>
                <div className="logo">
                    <img src={logo} alt={""} className="registerlogo"/>
                </div>
                    <div className="username">
                        <input type="text" placeholder="username" name="username" className="userName" onChange={this.handleChange} />
                    </div>
                    <div className="password">
                        <input type="password" placeholder="password" name="password" className="passWord" onChange={this.handleChange}/>
                    </div>
                    <div className="password">
                        <input type="password" placeholder="Confirm-password" name="confirmPassword" className="confirmPassWord" onChange={this.handleChange}/>
                    </div>
                    <div className="login">
                        <input type="submit" className="loginbtn" onClick={this.handleSubmit}/>
                    </div>
            </div>
    )
    
}
}

export default Register;