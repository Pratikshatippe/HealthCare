import React, {Component} from 'react';
import './register.css';
import logo from '../../images/register.png';


export class Register extends Component{
render(){
    return(
        <div className="main-content">
            <h1>Register</h1>
            <div className="logo">
                <img src={logo} alt={""} className="registerlogo"/>
            </div>
            <form onSubmit={this.submitForm}>
                <div className="username">
                    <input type="text" placeholder="username" name="username" className="userName" />
                </div>
                <div className="password">
                    <input type="password" placeholder="password" name="password" className="passWord"/>
                </div>
                <div className="password">
                    <input type="password" placeholder="Confirm-password" name="password" className="confirmPassWord"/>
                </div>
                <div className="login">
                    <input type="submit" className="loginbtn"/>
                </div>
            </form>
        </div>
    )
}
}

export default Register;