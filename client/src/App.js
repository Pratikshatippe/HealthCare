import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Homepage from './component/Homepage/homepage';
import Log from './component/LoginPage/login';
import { BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  render(){
    return (
      <Router>
      <div>
        <Route path="/" component={Homepage}/>
        <Route  path="/login" component={Log}/>
        </div>
      </Router>
    );
  }
}

export default App;
