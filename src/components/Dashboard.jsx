import React from 'react';
import { Card, Typography, Grid } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Dashboard = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}
    >
      <Grid item xs={12} sm={6} style={{ backgroundColor: 'none' }}>
        <Slider {...settings}>
          <div style={{ padding: '40px' }}>
            <Card
              style={{
                padding: '20px',
                backgroundColor: 'white',
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                borderRadius: '10px',
                textAlign: 'center',
              }}
            >
              <img
                src="https://media.istockphoto.com/id/1457979959/photo/snack-junk-fast-food-on-table-in-restaurant-soup-sauce-ornament-grill-hamburger-french-fries.webp?b=1&s=170667a&w=0&k=20&c=A_MdmsSdkTspk9Mum_bDVB2ko0RKoyjB7ZXQUnSOHl0="
                alt="Image 1"
                style={{
                  width: '100%',
                  height: '400px',
                  objectFit: 'cover',
                  borderRadius: '10px 10px 0 0',
                }}
              />
              <Typography variant="h5" gutterBottom>
                Card 1
              </Typography>
              {/* <Typography variant="body1">
                This is the content of card 1.
              </Typography> */}
            </Card>
          </div>
          <div style={{ padding: '40px' }}>
            <Card
              style={{
                padding: '20px',
                backgroundColor: 'white',
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                borderRadius: '10px',
                textAlign: 'center',
              }}
            >
              <img
                src="https://img.freepik.com/premium-photo/amazing-delicious-cheese-burger_727939-299.jpg"
                alt="Image 2"
                style={{
                  width: '100%',
                  height: '400px',
                  objectFit: 'cover',
                  borderRadius: '10px 10px 0 0',
                }}
              />
              <Typography variant="h5" gutterBottom>
                Card 2
              </Typography>
              <Typography variant="body1">
                {/* This is the content of card 2. */}
              </Typography>
            </Card>
          </div>
          <div style={{ padding: '40px' }}>
            <Card
              style={{
                padding: '20px',
                backgroundColor: 'white',
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                borderRadius: '10px',
                textAlign: 'center',
              }}
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_wOfdHx9FwrGHk02kIDDlmf0ZWZ8TIQ4kvCj8ACMp6w&s"
                alt="Image 3"
                style={{
                  width: '100%',
                  height: '400px',
                  objectFit: 'cover',
                  borderRadius: '10px 10px 0 0',
                }}
              />
              <Typography variant="h5" gutterBottom>
                Card 3
              </Typography>
              <Typography variant="body1">
                {/* This is the content of card 3. */}
              </Typography>
            </Card>
          </div>
        </Slider>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
