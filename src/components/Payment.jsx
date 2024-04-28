import React, { useState } from 'react';
import { Button, Typography, TextField, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const Payment = () => {
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [location, setLocation] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/payments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName,
          address,
          location,
          phoneNumber,
        }),
      });
      
      if (response.ok) {
        console.log('Payment data saved successfully');
        setFullName('');
        setAddress('');
        setLocation('');
        setPhoneNumber('');
      } else {
        console.error('Error saving payment data:', response.statusText);
      }
    } catch (error) {
      console.error('Error saving payment data:', error.message);
    }
  };

  return (
    <div style={{ 
      backgroundImage: `url('https://wallpaperset.com/w/full/6/6/5/377775.jpg')`, 
      backgroundSize: 'cover', 
      minHeight: '100vh', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center' 
    }}>
      <div style={{ 
        width: '100%', 
        maxWidth: '800px', 
        padding: '20px', 
        backgroundColor: 'rgba(255, 255, 255, 0.8)', 
        borderRadius: '10px' 
      }}>
        <div style={{ padding: '20px' }}>
          <Typography variant="h5" gutterBottom>
            Payment Details
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField 
                label="Full Name" 
                variant="outlined" 
                fullWidth 
                value={fullName} 
                onChange={(e) => setFullName(e.target.value)} 
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField 
                label="Address" 
                variant="outlined" 
                fullWidth 
                value={address} 
                onChange={(e) => setAddress(e.target.value)} 
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField 
                label="Location" 
                variant="outlined" 
                fullWidth 
                value={location} 
                onChange={(e) => setLocation(e.target.value)} 
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField 
                label="Phone Number" 
                variant="outlined" 
                fullWidth 
                value={phoneNumber} 
                onChange={(e) => setPhoneNumber(e.target.value)} 
              />
            </Grid>
            <Grid item xs={12}>
              <Button 
                variant="contained" 
                color="primary" 
                onClick={handleSubmit} 
                style={{ marginTop: 20 }} 
                component={Link} to='/pay'
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Payment;
