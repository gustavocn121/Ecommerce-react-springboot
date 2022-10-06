import { Grid, Container, TextField, Button } from '@mui/material'
import React from 'react'

const Checkout = ({cart, handleSubmit, CartSummary}) => {
  return (
    <Container  marginTop={"0.5rem"}>
      <form >
        <Grid container spacing={10} columns={2}>

        <Grid item xs={2} md={1}>
        <h4>Personal Information</h4>
        <Grid style={{display:"flex", flexDirection: "column"}} onSubmit={console.log('submitted')}>
              <TextField label="First name"  type="text"  onChange={'this.handleChange'} />
              <TextField label="Last name" type="text"  onChange={'this.handleChange'} />
              <TextField label="Email" type="email"  onChange={'this.handleChange'} />
              <TextField label="Country" type="text"  onChange={'this.handleChange'} />
              <TextField label="State" type="text"  onChange={'this.handleChange'} />
              <TextField label="City" type="text"  onChange={'this.handleChange'} />
              <TextField label="Zip code" type="text"  onChange={'this.handleChange'} />
              <TextField label="Address" type="address"  onChange={'this.handleChange'} />
              <TextField label="Phone number" type="text"  onChange={'this.handleChange'} />
          </Grid>
        </Grid>        
        <Grid item xs={2} md={1}>
          <h4>Payment Information</h4>
          <Grid style={{display:"flex", flexDirection: "column"}} onSubmit={console.log('submitted')}>
            <TextField label="Credit card"  type="text"  onChange={'this.handleChange'} />
                <TextField label="CVV" type="text"  onChange={'this.handleChange'} />
            </Grid>
          <Grid marginTop={"1rem"} item display={"flex"} justifyContent={"center"} xs={2}>
                <Button type="submit" size="large" color="success" variant="contained">Confirm purchase</Button>
          </Grid>
          </Grid>
        </Grid>
      </form>
    </Container>
   

  )
}

export default Checkout
