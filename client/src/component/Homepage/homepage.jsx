import React, {Component} from 'react';
import './homepage.css';
import health from '../../images/health.png';
import { Link } from 'react-router-dom';

export class Homepage extends Component{
    // constructor(props){
    //     super();
    // }

    render(){
        return(
            <div className="base-container">
                <div className="health">
                    <img src={health} alt={""} className="stylehealth" />
                </div>
                <div className="getstarted">
                    <Link to='/login'><button className="getstart">Get Started</button></Link>
                </div>
            </div>
        )
    }
}

export default Homepage;