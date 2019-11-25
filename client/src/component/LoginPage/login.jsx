import React, {Component} from 'react';
import './login.css';
import logo from '../../images/Userlogo.png';

export class Login extends Component{
    render(){
        return(
            <div className="main-content">
                <div className="logo">
                    <img src={logo} alt={""} className="Logo"/>
                </div>
                <div className="username">
                    <input type="text" placeholder="Username" className="userName"/>
                </div>
                <div className="password">
                    <input type="password" placeholder="Password" className="passWord"/>
                </div>
                <div className="login">
                    <button className="loginbtn">Login</button>
                </div>
            </div>
        )
    }
}

export default Login;
