import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Checkout = ({ cart, totalPrice }) => {
  const handlePlaceOrder = () => {
    // Logic for placing the order goes here
    console.log("Order placed!", cart, totalPrice);
  };

  return (
    <div className="checkout-container">
      <Typography variant="h4">Checkout</Typography>
      <Box>
        {cart.map((item, index) => (
          <div key={index}>
            <Typography>{item.fname} - ${item.fprice}</Typography>
          </div>
        ))}
      </Box>
      <Typography variant="h6">Total Price: ${totalPrice}</Typography>
      <Button variant="contained" color="primary" onClick={handlePlaceOrder}  component={Link} to='/Payment'>
        Place Order
      </Button>
      <br /><br />
      <Footer />
    </div>
  );
};

export default Checkout;
