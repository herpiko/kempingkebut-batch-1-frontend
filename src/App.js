import React from 'react';
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

export default App;
