import { Typography, Container } from '@mui/material'
import React from 'react'
import useStyles from './styles'
import CartItems from './Items/CartItems'
import CartSummary from'./Summary/CartSummary'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Cart = ({cart, size,products}) => {
    const classes = useStyles();

    const getProductInfo= (productId) =>{
      var product = null
      products.forEach(p =>{
        if (p.id == productId) {
          product = p
        }
      })  
      return product
    }

    var isEmpty = !size

    const EmptyCart = () =>{
      return <h6>Your cart is empty</h6>
    };

    const CartLayout = () =>{
      
      return (
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} columns={16}>
            <Grid item xs={8}>
              <CartItems products={products} items={cart} getProductInfo={getProductInfo}/>
            </Grid>
            <Grid item xs={8}>
              <CartSummary items={cart} products={products} getProductInfo={getProductInfo}/>
            </Grid>
          </Grid>
        </Box>
        );
    }

    return (
      <Container>
          <div className={classes.toolbar}/>
          <Typography className={classes.title} style={{marginBottom: "2rem"}} variant='h3'>Your Shopping Cart</Typography>
          { isEmpty ? <EmptyCart /> : <CartLayout cart={cart}/>}
      </Container>
    )
}   

export default Cart