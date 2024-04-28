import { CardMedia, Box, Grid, TextField } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const View = () => {
var[data,setData] = useState([])
useEffect(()=>{
  axios.get("http://localhost:8080/view")
  .then((response)=>{
    console.log(response.data)
    setData(response.data)
    console.log(data)
  })
  .catch((err)=>console.log(err))
},[])
// const deleteValue = (id)=>{
//   console.log(id)
//   axios.delete("http://localhost:8080/remove/"+id).
//   then((response)=>{
//     alert(response.data)
//     window.location.reload(false)
//   }).catch((err)=>console.log(err))

// }
  return (
        <div  style={{margin:'4%'}}>
  {/* <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center" gap={2}> */}
  <Grid container spacing={2}>
      {data.map((val,i)=>(
      <Grid item xs={12} sm={6} md={4} key={i}>
          <Card sx={{ minWidth: 275 }}>
            
        <CardContent>

        <CardMedia
                  component="img"
                  // height="300"
                  image={val.imageUrl} // Assuming your data has an imageUrl property
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}// Adjust height as needed
                />

        
         <Typography variant='h5' gutterBottom>
           Food Name : {val.fname}
          </Typography>
          <Typography variant='h6'>
          Price : {val.fprice}
          </Typography>
          <Button variant="contained" color="primary" component={Link} to="/payment">
            Buy Now
          </Button>
         
        </CardContent>
   
        <CardActions>
          {/* <Button
          onClick={()=>deleteValue(val._id)}
          size="small" variant='contained' color='secondary'>
            Delete
            </Button>
          <Button size="small" variant='contained' color='secondary'>Update</Button> */}
        </CardActions>
      </Card>
        </Grid>
       
))}
         </Grid> 
         {/* </Box> */}
    </div>
  )
}

export default View