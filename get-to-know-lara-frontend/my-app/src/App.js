import {Route, BrowserRouter as Router, BrowserRouter} from 'react-router-dom';
import NavBar from "./components/NavBar";
import React from "react";
import Registration from "./components/Registration";

function App() {
  return (
    <div>
      <Router>
        <NavBar/>
        <Route exact path="/registration" children={<Registration />} />
      
      </Router>
      
    </div>
  );
}

export default App;
