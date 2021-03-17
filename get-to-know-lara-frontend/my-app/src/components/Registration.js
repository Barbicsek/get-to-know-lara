import React, { useState } from "react";
import {useHistory} from 'react-router-dom';
import {
    Grid,
    Paper,
    Typography,
    TextField,
    Button,
  } from "@material-ui/core";
 
 
  function Registration() {
   
    const paperStyle = 
    {
      padding: "30px 20px",
      height: 660,
      width: 500,
      margin: "70px auto",
    };
    const formStyle = 
    {
      height: 520,
      display: "flex",
      flexFlow: "column wrap",
      justifyContent: "space-between",
    };
 
    const headerStyle = { margin: 0 };
    const button = { backgroundColor: "#859DF4" };
 
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
 
    async function signUp(){
        let item = {name, password, email}
        let result = await fetch("http://localhost:8000/api/registration", {
            method: 'POST',
            body:JSON.stringify(item),
            headers: {
                "Content-Type" : 'application/json',
                "Accept" : 'application/json'
            }
        })

        result = await result.json()
        localStorage.setItem("user-info", JSON.stringify(result));
        history.push("/");
    }
 
 
    return (
      <div>
        <Grid>
          <Paper elevation={20} style={paperStyle}>
 
            <Grid align="center">
              <h2 style={headerStyle}>Registration</h2>
              <Typography variant="caption" gutterBottom>
              </Typography>
            </Grid>
 
            <form style={formStyle}>
              <TextField
                onChange={(e) => setName(e.target.value)}
                value={name}
                fullWidth
                label="Username"
                type="text"
                placeholder="Enter your username"
              />
              <TextField  
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                fullWidth
                label="Email"
                type="text"
                placeholder="Enter your email"
              />
              <TextField
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                fullWidth
                label="Password"
                type="password"
                placeholder="Enter your password"
              />
            </form>
            <Button onClick={signUp} type="submit" variant="contained" style={button}>
                Sign up
              </Button>
 
          </Paper>
        </Grid>
      </div>
    );
  }

export default Registration;