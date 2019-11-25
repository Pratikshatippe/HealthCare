import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
// import Homepage from './component/Homepage/homepage';
// <Route path="/" component={Homepage} exact/>
// import Log from './component/LoginPage/login';
// <Route  path="/login" component={Log}/>
// <Route  path="/disease" component={Diseases}/>
// import Diseases from './component/Disease/diseases';
import Rooms from './component/Rooms/room';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends Component {
  render(){
    return (
      <Router>
        <Switch>
        <Route  path="/rooms" component={Rooms}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
