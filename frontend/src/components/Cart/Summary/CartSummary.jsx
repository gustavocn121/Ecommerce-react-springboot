import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const CartSummary = ({items, getProductInfo}) => {
  var totalPrice = 0.0
  var cartSize = 0;


  items.forEach((value, key) => {
    var p = getProductInfo(key)
    if (p != null) {
      cartSize += value;
      totalPrice+= (p.price.raw * value) 
    }
  });

  return (
    <Grid item xs={8}>
      <Item>
        <div style={{marginBottom: "0.3rem"}}>
          Cart size: <b>{cartSize}</b>
        </div>
        <div style={{marginBottom: "0.5rem"}}>
          Total price: R$<span>{totalPrice.toFixed(2)}</span>
        </div>
        <div style={{marginBottom: "0.3rem"}}>
          <Button variant="contained" component={Link} to="/checkout" href="#">Checkout</Button>
        </div>
      </Item>

    </Grid>
  )
}

export default CartSummary