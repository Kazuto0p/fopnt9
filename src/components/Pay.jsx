import React, { useState } from 'react';
import { Card, CardContent, Typography, Checkbox, FormControlLabel, Button, Grid, TextField } from '@mui/material';
import { Link } from 'react-router-dom';

const Pay = () => {
  const [checkedOption, setCheckedOption] = useState(null);
  const [upiNumber, setUpiNumber] = useState('');
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    expiryMonth: '',
    expiryYear: '',
    cvv: '',
  });

  const [tabValue, setTabValue] = useState(0);

  const handleChange = (event) => {
    const selectedOption = event.target.name;
    if (checkedOption === selectedOption) {
      // If the same option is selected again, deselect it
      setCheckedOption(null);
    } else {
      // Otherwise, set the selected option
      setCheckedOption(selectedOption);
    }
  };

  const handleUpiNumberChange = (event) => {
    setUpiNumber(event.target.value);
  };

  const handleCardDetailsChange = (event) => {
    const { name, value } = event.target;

    if (name === 'expiryMonth') {
      // Ensure only valid month values are entered
      if (/^\d*$/.test(value) && parseInt(value) <= 12 && parseInt(value) > 0) {
        setCardDetails({ ...cardDetails, [name]: value });
      }
    } else {
      setCardDetails({ ...cardDetails, [name]: value });
    }
  };

  const handleContinue = () => {
    // Handle continue action
  };

  return (
    <div style={{ backgroundImage: `url('https://wallpaperset.com/w/full/6/6/5/377775.jpg')`, backgroundSize: 'cover', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Card style={{ width: 400, backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: 10 }}>
        <CardContent>
          <div style={{ marginTop: 20 }}>
            <Typography variant="h5" gutterBottom>
              {tabValue === 1 ? 'Payment' : 'Payment Details'}
            </Typography>
            
            <FormControlLabel
              control={<Checkbox checked={checkedOption === 'upi'} onChange={handleChange} name="upi" color="primary" />}
              label="UPI"
            />
            {checkedOption === 'upi' && (
              <TextField
                label="Enter UPI Number"
                variant="outlined"
                fullWidth
                value={upiNumber}
                onChange={handleUpiNumberChange}
                style={{ marginBottom: 20 }}
                InputProps={{ style: { borderColor: 'orangered' } }}
              />
            )}
            <FormControlLabel
              control={<Checkbox checked={checkedOption === 'card'} onChange={handleChange} name="card" color="primary" />}
              label="Card"
            />
            {checkedOption === 'card' && (
              <div>
                <TextField
                  label="Card Number"
                  variant="outlined"
                  fullWidth
                  name="cardNumber"
                  value={cardDetails.cardNumber}
                  onChange={handleCardDetailsChange}
                  style={{ marginBottom: 20 }}
                />
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      label="Expiry Month"
                      variant="outlined"
                      fullWidth
                      name="expiryMonth"
                      value={cardDetails.expiryMonth}
                      onChange={handleCardDetailsChange}
                      InputProps={{ style: { borderColor: 'orangered' } }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Expiry Year"
                      variant="outlined"
                      fullWidth
                      name="expiryYear"
                      value={cardDetails.expiryYear}
                      onChange={handleCardDetailsChange}
                      InputProps={{ style: { borderColor: 'orangered' } }}
                    />
                  </Grid>
                </Grid>
                <TextField
                  label="CVV"
                  variant="outlined"
                  fullWidth
                  name="cvv"
                  value={cardDetails.cvv}
                  onChange={handleCardDetailsChange}
                  style={{ marginTop: 20 }}
                  InputProps={{ style: { borderColor: 'orangered' } }}
                />
              </div>
            )}
            <FormControlLabel
              control={<Checkbox checked={checkedOption === 'cashOnDelivery'} onChange={handleChange} name="cashOnDelivery"/>}
              label="Cash on Delivery"
            />
            <Button variant="contained" color="primary" onClick={handleContinue} style={{ marginTop: 20, color: 'white', backgroundColor: 'orangered' }}>
              Continue
            </Button>&nbsp;
            <Button variant="contained" color="primary" onClick={handleContinue} style={{ marginTop: 20, color: 'white', backgroundColor: 'orangered' }} component={Link} to='/payment'>
              Back
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Pay;
