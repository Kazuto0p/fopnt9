import React, { useState, useEffect } from 'react';
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography, Button } from '@mui/material';
import axios from 'axios';
import './DataView.css'; // Import your CSS file for styling
import Footer from './Footer';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Newcart = ({ cart = [], setCart, setTotalPrice }) => {
  const [data, setData] = useState([]);
  const navigate = useNavigate(); // Use useNavigate hook

  useEffect(() => {
    // Fetch product data from the server endpoint
    axios.get("http://localhost:8080/view")
      .then(response => {
        setData(response.data); // Set fetched product data to state
      })
      .catch(error => {
        console.error('Error fetching product data:', error);
      });
  }, []);

  // Calculate total price of items in cart
  useEffect(() => {
    let price = 0;
    if (cart && cart.length > 0) {
      cart.forEach(item => {
        price += item.fprice;
      });
    }
    setTotalPrice(price);
  }, [cart, setTotalPrice]);

  const addToCart = (item) => {
    setCart([...cart, item]); // Add item to cart array
  };

  const viewCart = () => {
    navigate('/ViewCart');
  };

  const navigateToCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="cards-container">
      <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center" gap={2}>
        {data.map((val, i) => (
          <Card key={val._id} className="custom-card card-height">
            <CardActionArea>
              <CardMedia
                component="img"
                className="card-image"
                image={val.imageUrl}
                alt={val.fname}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {val.fname}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Price: {val.fprice}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => addToCart(val)}
                >
                  {cart.includes(val) ? "Added to Cart" : "Add to Cart"}
                </Button>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
      <Button variant="contained" color="primary" onClick={viewCart}>
        View Cart
      </Button>
      <Button variant="contained" color="primary" onClick={navigateToCheckout}>
        Checkout
      </Button>
      <br /><br />
      <Footer />
    </div>
  );
};

export default Newcart;
