import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom';


export default function MenuAppBar() {

  const user = JSON.parse(sessionStorage.getItem('user'));
  const history = useHistory();

  function logOut() {
    sessionStorage.clear();
    window.location.href = '/';

  }


  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Nav className="mr-auto nav_bar_wrapper">
          {
            sessionStorage.getItem('token') ?
            <>
              <Link to="/mail/sent">Sent Mails</Link>
              <Link to="/mail/compose">Compose mails</Link>
            </>
            :
            <>
              <Link to="/login">Login  </Link>
    
              <Link to="/registration">Registration  </Link>
            </>
          }
        </Nav>
        {sessionStorage.getItem('user') ?
                <Nav>
          
                <NavDropdown title={user && user["name"]}>
                  <NavDropdown.Item onClick={logOut}>Logut</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              :null

        }

      </Navbar>

    </div>
  );
}