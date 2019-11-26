import React, {Component} from 'react';
import './diseases.css';
import disease from '../../images/disease.png';

export class Diseases extends Component{
    render(){
        return(
            
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
        )
    }
}

export default Diseases;
