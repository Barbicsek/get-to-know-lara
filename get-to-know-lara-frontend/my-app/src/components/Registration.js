import React, { useState, useEffect } from "react";
import {
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import Checkbox from "@material-ui/core/Checkbox";


function Register() {
  
  const paperStyle = {
    padding: "30px 20px",
    height: 660,
    width: 500,
    margin: "70px auto",
  };
  const formStyle = {
    height: 520,
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "space-between",
  };

  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#859DF4", marginBottom: 10 };
  const marginTop = { marginTop: 5 };
  const button = { backgroundColor: "#859DF4" };

  const [user, setUser] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e) => {
    setUser({name, email, password});
  };

  return (
    <div>
      <Grid>
        <Paper elevation={20} style={paperStyle}>
          <Grid align="center">
            <h2 style={headerStyle}>Registration</h2>
            <Typography variant="caption" gutterBottom>
            </Typography>
          </Grid>
          <form style={formStyle} onSubmit={submit}>
            <TextField
              onChange={(e) => setName(e.target.value)}
              fullWidth
              label="Username"
              placeholder="Enter your username"
            />
            <TextField
              onChange={(e) => setEmail(e.target.value)}
              fullWidth 
              label="Email"
              placeholder="Enter your email"
            />
            <TextField
              fullWidth
              label="Address"
              placeholder="Enter your address"
            />
            <TextField
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              label="Password"
              type="password"
              placeholder="Enter your password"
            />
            <Button type="submit" variant="contained" style={button}>
              Sign up
            </Button>
          </form>
        </Paper>
      </Grid>
    </div>
  );
}

export default Register;