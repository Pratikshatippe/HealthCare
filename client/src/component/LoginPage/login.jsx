import React, {Component} from 'react';
import './login.css';
import logo from '../../images/Userlogo.jpg';


export class Login extends Component{
    constructor(props){
        super(props)
        let loggedIn = false
        this.state = {
            username:'',
            password:'',
            loggedIn
        }
        this.onChange = this.onChange.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }
    onChange(e){
        this.setState({
            [e.target.value]:e.target.value
        });
    }
    submitForm(e){
        e.preventDefault()
        const { username, password } = this.state
        // login magic
        if(username === "A" && password ==="B"){

        }
    }
    render(){
        return(
            <div className="main-content">
                <div className="logo">
                    <img src={logo} alt={""} className="userlogo"/>
                </div>
                <form onSubmit={this.submitForm}>
                    <div className="username">
                        <input type="text" placeholder="username" name="username" className="userName" value={this.state.username} onChange={this.onChange}/>
                    </div>
                    <div className="password">
                        <input type="password" placeholder="password" name="password" className="passWord" value={this.state.password} onChange={this.onChange}/>
                    </div>
                    <div className="login">
                        <input type="submit" className="loginbtn"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;
