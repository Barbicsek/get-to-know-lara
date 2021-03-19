import React, {useState, useEffect} from "react";
import {useHistory} from 'react-router-dom';
import {
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";;

function Login() {

  const paperStyle = {
    padding: "30px 20px",
    height: 380,
    width: 500,
    margin: "70px auto",
  };

  const formStyle = {
    height: 220,
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "space-between",
  };

  const headerStyle = { margin: 0 };
  const button = { backgroundColor: "#859DF4" };
  const passwordStyle = { marginBottom: 30 };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  async function logIn(){

    let item = {"email": email, "password":password};

    let result;
    fetch('http://localhost/get-to-know-lara/get-to-know-lara-backend/public/api/login', {
        method : 'POST',
        headers : {
             'Content-Type' : 'application/json',
             'Accept' : 'application/json',
          
        },
    
        body: JSON.stringify(item)
    }) 
    .then((response) => {
        return result = response.json();
        
})
    .then((data) => {
      sessionStorage.setItem("token", data.token); 
      sessionStorage.setItem("user", JSON.stringify(data.user));
    })

    history.push("/mail/inbox");


  }

  return (
    <div>
      <Grid>
        <Paper elevation={20} style={paperStyle}>
          <Grid align="center">
            <h2 style={headerStyle}>Log in</h2>
            <Typography variant="caption" gutterBottom>
              Please fill this form to log in!
            </Typography>
          </Grid>

          <form style={formStyle}>

            <TextField
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              fullWidth
              label="Email"
              placeholder="Enter your email"
            />
            <TextField
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              fullWidth
              style={passwordStyle}
              label="Password"
              type="password"
              placeholder="Enter your password"
            />

          </form>

          <Button onClick={logIn} type="submit" variant="contained" style={button}>
              Log in
            </Button>
        </Paper>
      </Grid>
    </div>
  );
}

export default Login;