import React from 'react';
<<<<<<< HEAD
import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';

import Register from './views/Auth/Register';
=======
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';

import Login from 'views/Auth/Login';
import Register from 'views/Auth/Register';

class App extends React.Component {
  render() {
    return (
      <div className="App" >
          <Router>

            <Route path="/login" exact component={ Login } />
            <Route path="/register" exact component={ Register } />

          </Router>
      </div>
    );
  }
}
>>>>>>> 929742a05807b5a8926841a2806be2b30d222d1f

class App extends React.Component{
  render() {
    return(
      <div className="App">
        <Router>
          <Route path="/register" component={Register}/> 
        </Router>
      </div>
    )
  }
}
export default App;
