import React, { useState } from 'react'
import { Button, Link, TextField, Typography } from '@mui/material'
import axios from 'axios';

const Signup = () => {

  const [inputs, setInputs] = useState({
    oname: "",
    opass: "",
    omail: "",
    onumber: ""
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInputs((prevData) => ({ ...prevData, [name]: value }));
  };
  const addHandler = () => {
    console.log("button clicked");
    axios.post("http://localhost:8080/Signup", inputs)
      .then((response) => {
        console.log(response.data);
        alert(response.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
        <br /><br /><br /><br /><br /><br /><br />
                <Typography variant="h5" gutterBottom>Sign-Up Form</Typography>
        <TextField name='oname' onChange={inputHandler} value={inputs.oname} id="outlined-basic" label="Username" variant="outlined" color="success" focused /><br /><br />
        <TextField name='omail' onChange={inputHandler} value={inputs.omail}id="outlined-basic" label="Email" variant="outlined" color="success" focused/><br /><br />
        <TextField name='opass' onChange={inputHandler} value={inputs.opass}  id="outlined-basic" label="Password" variant="outlined" color="success" focused/><br /><br />
        <Button onClick={addHandler} variant="contained"><Link to='/Home'style={{textDecoration:"none",color:"white"}}>Submit</Link> </Button>
    </div>
  )
}

export default Signup
