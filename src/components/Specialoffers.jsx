import React from 'react';

import Rating from '@mui/material/Rating';
import { AppBar, Card, CardContent, Toolbar, Typography } from '@mui/material';

const Specialoffers = () => {
  const specialOrders = [
    { id: 1, name: 'Special Burger', price: 300, offerRate: 15, rating: 4.5, image: 'https://www.shutterstock.com/image-photo/classic-hamburger-stock-photo-isolated-600nw-2282033179.jpg' },
    { id: 2, name: 'Deluxe Pizza', price: 700, offerRate: 20, rating: 4.8, image: 'https://media.istockphoto.com/id/153784617/photo/supreme-pizza-slice-lift.jpg?s=612x612&w=0&k=20&c=Et5uDUJYv3sqDitb1jnUbnGrxhn015foBX_BS-1NFxs=' },
    { id: 3, name: 'Gourmet Pasta', price: 1000, offerRate: 25, rating: 4.3, image: 'https://www.foodandwine.com/thmb/97PY4E6Wk95IYv1_8pDZvBEi0Uw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cream-tomato-rigatoni-FT-RECIPE1020-139fb3fa52574e8bb06f98e7fa3e4f1e.jpg' },
    { id: 4, name: 'Sushi Platter', price: 1500, offerRate: 15, rating: 4.6, image: 'https://b2847906.smushcdn.com/2847906/wp-content/uploads/2016/07/60-scaled.jpg?lossy=1&strip=1&webp=1' },
    { id: 5, name: 'Spicy Chicken Curry', price: 250, offerRate: 25, rating: 4.7, image: 'https://static.toiimg.com/thumb/58394256.cms?imgsize=104892&width=800&height=800' },
    { id: 6, name: 'Club Sandwich', price: 799, offerRate: 15, rating: 4.2, image: 'https://www.foodandwine.com/thmb/tM060YA0Fd0UALCmPQ-5gGWyBqA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Classic-Club-Sandwich-FT-RECIPE0523-99327c9c87214026b9419b949ee13a9c.jpg' },    
  ];

  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <Toolbar>
          <Typography variant="h6" component="div" style={{ fontStyle: 'italic', color: 'white' }}>
            Special Orders
          </Typography>
        </Toolbar>
      </AppBar>
      <div style={{ backgroundImage: 'url(https://img.freepik.com/premium-photo/plate-food-with-black-background-drop-sauce-being-poured-it_664644-1424.jpg)', backgroundSize: 'cover', minHeight: '100vh' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', padding: '20px' }}>
          {specialOrders.map(order => (
            <Card key={order.id}>
              <img src={order.image} alt={order.name} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
              <CardContent>
                <Typography variant="h6" component="div">
                  {order.name}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  Price: ${order.price.toFixed(2)}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  Offer Rate: {order.offerRate}%
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  Rating: <Rating value={order.rating} readOnly />
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Specialoffers;