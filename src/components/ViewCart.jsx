import React from 'react';
import { Box, Typography } from '@mui/material';

const ViewCart = ({ cart = [], totalPrice = 0 }) => {
  console.log("Cart items:", cart);
  console.log("Total Price:", totalPrice);

  return (
    <div className="cards-container">
      <Typography variant="h4">Cart Items</Typography>
      <Box>
        {cart.map((item, index) => (
          <div key={index}>
            <Typography>{item.fname} - ${item.fprice}</Typography>
          </div>
        ))}
      </Box>
      <Typography variant="h6">Total Price: ${totalPrice}</Typography>
    </div>
  );
};

export default ViewCart;
