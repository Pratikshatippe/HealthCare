import React, {Component} from 'react';
import './App.css';
// import components
import Homepage from './component/Homepage/homepage';
import Log from './component/LoginPage/login';
import Diseases from './component/Disease/diseases';
import Rooms from './component/Rooms/room';
import Register from './component/Register/register';
import Doctor from './component/Doctor/doctor';

// import router in react
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends Component {
  render(){
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Homepage}/>
            <Route  path="/login" component={Log}/>
            <Route  path="/register" component={Register}/>
            <Route  path="/disease" component={Diseases}/>
            <Route  path="/rooms" component={Rooms}/>
            <Route  path="/doctor" component={Doctor}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
