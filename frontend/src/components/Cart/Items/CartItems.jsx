import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CartItem from  './CartItem';


const CartItems = ({items, products, getProductInfo}) => {
  console.log('-------------- products')
  console.log(products)




  const itemsGrid=[]
  items.forEach((value, key) => {
    console.log(key + ' , '+ value)
    var product = getProductInfo(key);
    console.log(product)
    
    if (product != null) {
          console.log(product)
          itemsGrid.push(
            <CartItem key={product['id']} name={product['name']} price={product.price.raw || 0 } quantity={value} imageUrl={product.image.url}/>    
            )
    }
  })

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={1}>
        {itemsGrid}
      </Grid>
    </Box>
  )
}

export default CartItems