import {  Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Change import to useNavigate

export const Login = () => {
  const [oname, setOname] = useState("");
  const [opass, setOpass] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Change useHistory to useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/login', {
        oname,
        opass
      });
      if (response.data === "success") {
        setMessage("Login successful");
        navigate('/Home'); // Change history.push to navigate
      } else {
        setMessage("Invalid username or password");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
        <br /><br /><br /><br /><br /><br /><br />
        <Typography variant="h5" gutterBottom>
            Login Form
        </Typography>
        {/* <TextField id="outlined-basic" label="UserName" variant="outlined" color="success" focused /><br /><br />
        <TextField id="outlined-basic" label="Email Id" variant="outlined" color="success" focused /><br /><br />
        <TextField id="outlined-basic" label="Password" variant="outlined" color="success" focused /><br /><br />
         <br /><br />
        <Button variant="contained">Submit</Button>
         */}
         <form onSubmit={handleSubmit}>
          <TextField
            label="Username"
            variant='outlined'
            value={oname}
            onChange={(e) => setOname(e.target.value)}
          /><br></br><br></br>
          <TextField
            label="Enter password"
            type='password'
            variant='outlined'
            value={opass}
            onChange={(e) => setOpass(e.target.value)}
          /><br></br><br></br>
          <Button type="submit" variant='contained' color='secondary'>
            <Link to='/Home' style={{ textDecoration: "none", color: "black" }}>Login</Link>
          </Button><br></br><br></br>
        </form>
        {message && <Typography>{message}</Typography>}
        <br></br><br></br>
    </div>
  )
  }

export default Login