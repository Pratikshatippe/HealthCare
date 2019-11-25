import React, {Component} from 'react';
import './room.css';
import patient from '../../images/patient.png';
import free from '../../images/free.jpg';

export class Rooms extends Component{
    render(){
        return(
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
        )
    }
}
 export default Rooms;