import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';

import Register from './views/Auth/Register';

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
