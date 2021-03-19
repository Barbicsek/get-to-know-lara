import {Route, BrowserRouter as Router, BrowserRouter} from 'react-router-dom';
import NavBar from "./components/NavBar";
import React from "react";
import Registration from "./components/Registration";
import Login from "./components/Login";
import Inbox from "./components/Inbox";


function App() {
  return (
    <div>
      <Router>
        <NavBar/>
        <Route exact path="/registration" children={<Registration />} />
        <Route exact path="/login" children={<Login />} />
        <Route exact path="/mail/inbox" children={<Inbox />} />
      </Router>
      
    </div>
  );
}

export default App;
