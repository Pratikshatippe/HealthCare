import React, {Component} from 'react';
import './login.css';
import logo from '../../images/Userlogo.jpg';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

export class Login extends Component{
    constructor(props){
        super(props);
        let loggedIn = false
        this.state = {
            username:'',
            password:'',
            loggedIn
        };
        this.handleChange = this.handleChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }
    handleChange(e){
        const {name,value} = e.target
        this.setState({
            [name]:value
        });
    }
    submitForm(e){
        e.preventDefault();
        const { username, password } = this.state
        // login magic
        axios.get('http://localhost:8800/login')
            .then(user=>{
                // console.log(user.data);
                const u = user.data;
                u.forEach(element => {
                    if(!(username === element.username && password === element.password)){   
                        console.log("please register");
                    }
                    else{
                        this.setState({
                            loggedIn: true
                        });
                    }
                });

            })

    }
    render(){
        if(this.state.loggedIn){
            return <Redirect to='/userInput'/>
        }
        return(
            <div className="main-content">
                <h1>Login</h1>
                <div className="logo">
                    <img src={logo} alt={""} className="userlogo"/>
                </div>
                <form onSubmit={this.submitForm}>
                    <div className="username">
                        <input type="text" placeholder="username" name="username" className="userName" value={this.state.username} onChange={this.handleChange}/>
                    </div>
                    <div className="password">
                        <input type="password" placeholder="password" name="password" className="passWord" value={this.state.password} onChange={this.handleChange}/>
                    </div>
                    <div className="login">
                        <input type="submit" className="loginbtn"/>
                    </div>
                    <p><Link to='/register'>Create account? Register</Link></p>
                </form>
            </div>
        )
    }
}

export default Login;
