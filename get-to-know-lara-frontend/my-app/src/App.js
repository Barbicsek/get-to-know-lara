import {Route, BrowserRouter as Router, BrowserRouter} from 'react-router-dom';
import NavBar from "./components/NavBar";
import React from "react";
import Registration from "./components/Registration";
import Login from "./components/Login";
import Inbox from "./components/Inbox";
import EmailsSent from "./components/EmailsSent";
import ComposeMail from "./components/ComposeMail";

function App() {
  return (
    <div>
      <Router>
        <NavBar/>
        <Route exact path="/registration" children={<Registration />} />
        <Route exact path="/login" children={<Login />} />
        <Route exact path="/mail/inbox" children={<Inbox />} />
        <Route exact path="/mail/sent" children={<EmailsSent />} />
        <Route exact path="/mail/compose" children={<ComposeMail />} />
      </Router>
      
    </div>
  );
}

export default App;
