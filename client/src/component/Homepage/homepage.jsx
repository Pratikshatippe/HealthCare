import React, {Component} from 'react';
import './homepage.css';
import health from '../../images/health.png';
import mainlogo from '../../images/mainLogo.png';
import care from '../../images/care.png';

export class Homepage extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="base-container">
                <div className="health">
                    <img src={health} alt={""} className="stylehealth" />
                </div>
                <div className="mainLogo">
                    <img src={mainlogo} alt={""} className="stylemainlogo" />
                </div>
                <div className="care">
                    <img src={care} alt={""} className="stylecare" />
                </div>  
            </div>
        )
    }
}

export default Homepage;