import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const CartItem = ({name, price, imageUrl, quantity}) => {
    return (
      <Grid item xs={8}>
            <Item > 
              <div style={{display: "flex", justifyContent:"space-evenly"}}>
                <div>
                  <img style={{height: "auto", maxWidth: '10rem'}} src={imageUrl}/> 
                </div>
                <div>
                  <div>
                  <h4>
                    {name}
                  </h4>
                  </div>
                  <div>
                    <h4>
                      quantity: {quantity}
                    </h4>
                    <h6>
                      total price: {price * quantity}
                    </h6>  
                  </div>
                </div>
              </div>
            </Item>
      </Grid>
    )
  }

  export default CartItem