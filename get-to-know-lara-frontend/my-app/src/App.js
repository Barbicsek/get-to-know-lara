import {Route, BrowserRouter as Router, BrowserRouter} from 'react-router-dom';
import NavBar from "./components/NavBar";
import React from "react";

function App() {
  return (
    <div>
      <Router>
        <NavBar/>
      
      </Router>
      
    </div>
  );
}

export default App;
