import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
// import Homepage from './component/Homepage/homepage';
// <Route path="/" component={Homepage}/>
import Log from './component/LoginPage/login';
// import Diseases from './component/Disease/diseases';
// import Rooms from './component/Rooms/room';
// <Route  path="/disease" component={Diseases}/>
// <Route  path="/rooms" component={Rooms}/>
import Register from './component/Register/register'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends Component {
  render(){
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route  path="/login" component={Log}/>
            <Route  path="/register" component={Register}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
