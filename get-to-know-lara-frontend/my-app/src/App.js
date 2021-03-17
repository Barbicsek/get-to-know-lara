import {Route, BrowserRouter as Router, BrowserRouter} from 'react-router-dom';
import NavBar from "./components/NavBar";
import React from "react";
import Registration from "./components/Registration";
import Login from "./components/Login";


function App() {
  return (
    <div>
      <Router>
        <NavBar/>
        <Route exact path="/registration" children={<Registration />} />
        <Route exact path="/login" children={<Login />} />
      </Router>
      
    </div>
  );
}

export default App;
