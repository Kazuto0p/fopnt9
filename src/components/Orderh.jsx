import React from 'react';

import Rating from '@mui/material/Rating';
import { AppBar, Card, CardContent, Typography } from '@mui/material';

const Orderh = () => {
  const orderHistory = [
    { id: 1, name: 'Burger', price: 399, rating: 4.3, image: 'https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg', time: '12:30 PM', location: 'Pampady', orderPlaced: 'John Doe' },
    { id: 2, name: 'Pizza', price: 799, rating: 4.6, image: 'https://www.vegrecipesofindia.com/wp-content/uploads/2018/05/paneer-pizza-recipe-1.jpg', time: '1:45 PM', location: 'Manarcard', orderPlaced: 'Jane Smith' },
    { id: 3, name: 'Pasta', price: 1000, rating: 4.1, image: 'https://www.thefieryvegetarian.com/wp-content/uploads/2023/01/vegetarian-rasta-pasta-recipe-720x540.jpg', time: '2:00 PM', location: 'Ayarkunnam', orderPlaced: 'Alice Johnson' },
    { id: 4, name: 'Sushi', price: 1590, rating: 4.8, image: 'https://cdn.britannica.com/52/128652-050-14AD19CA/Maki-zushi.jpg', time: '2:30 PM', location: 'Annadivayal', orderPlaced: 'Bob Brown' },
    { id: 5, name: 'Steak', price: 1800, rating: 4.2, image: 'https://www.allrecipes.com/thmb/3cixVDmAtbb2hYxoFLVJ4VPQ7rA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/143809-best-steak-marinade-in-existence-ARMag-1x1-1-8105b6b8e5cb4931ba8061f0425243dd.jpg', time: '3:00 PM', location: 'illivalavu', orderPlaced: 'Charlie Wilson' },
    { id: 6, name: 'Salad', price: 250, rating: 4.5, image: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/epic-summer-salad-000aded.jpg?quality=90&resize=440,400', time: '3:30 PM', location: 'Kidagoor', orderPlaced: 'David Miller' },
    { id: 7, name: 'Tacos', price: 500, rating: 4.4, image: 'https://danosseasoning.com/wp-content/uploads/2022/03/Beef-Tacos-1024x767.jpg', time: '4:00 PM', location: 'Pala', orderPlaced: 'Emily Davis' },
    { id: 8, name: 'Chicken Curry', price: 200, rating: 4.6, image: 'https://www.kitchensanctuary.com/wp-content/uploads/2022/09/Air-Fryer-Chicken-Curry-square-FS-36.jpg', time: '4:30 PM', location: 'Cherpungal', orderPlaced: 'Frank Martinez' },
    { id: 9, name: 'Sandwich', price: 499, rating: 4.0, image: 'https://somethingaboutsandwiches.com/wp-content/uploads/2022/04/ham-sandwich-500x375.jpg', time: '5:00 PM', location: 'Velloor', orderPlaced: 'Grace Wilson' },
    { id: 10, name: 'Ramen', price: 300, rating: 4.7, image: 'https://www.modernfarmhouseeats.com/wp-content/uploads/2021/03/chili-lime-shrimp-ramen-2-scaled.jpg', time: '5:30 PM', location: 'Rit', orderPlaced: 'Henry Thomas' },
  ];

  // Define allOrders variable by copying orderHistory
  const allOrders = [...orderHistory];

  return (
    <div style={{ backgroundImage: `url('https://i.pinimg.com/736x/8f/8c/08/8f8c08f74bec74366da715b197c67c66.jpg')`, backgroundSize: 'cover', minHeight: '100vh' }}>
      <AppBar position="static" sx={{ bgcolor: 'transparent', boxShadow: 'none' }}>
        
      </AppBar>

      <div style={{ padding: '20px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
        <Typography variant="h4" gutterBottom style={{ color: 'white', gridColumn: '1 / -1' }}>
          Order History
        </Typography>

        {allOrders.map(order => (
          <Card key={order.id} sx={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
            <img src={order.image} alt={order.name} style={{ width: '100%', height: '234px', objectFit: 'cover' }} />
            <CardContent>
              <Typography variant="h5" component="div">
                {order.name}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                Price: ${order.price.toFixed(2)}
              </Typography>
              {order.id <= 10 && (
                <Typography variant="subtitle1" color="text.secondary">
                  Rating: <Rating name={`rating-${order.id}`} value={order.rating} readOnly />
                </Typography>
              )}
              <Typography variant="subtitle1" color="text.secondary">
                Time: {order.time}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                Location: {order.location}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                Order Placed By: {order.orderPlaced}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Orderh;
