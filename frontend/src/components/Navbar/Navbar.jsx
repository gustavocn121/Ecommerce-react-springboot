import React, {useState} from 'react'
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from '@material-ui/core'
import logo from '../../assets/logo.png'
import { ShoppingCart } from '@material-ui/icons'
import useStyles from './styles';
import { Link, useLocation } from 'react-router-dom';


const Navbax = ({cartSize}) => {
    const classes = useStyles();
    const location = useLocation();  

    return (
    <>
        <AppBar position="fixed" className={classes.appBar} color='inherit'>
            <Toolbar>
                <Typography style={{textDecoration: 'none', color:'black'}} component={Link} to="/">
                    <img src={logo} alt='MyStoreLogo' height="25px" className={classes.image}/>
                    MyStore
                </Typography>
                <div className={classes.grow}/>
                {location.pathname != '/cart' &&(
                    <div className={classes.button}>
                        <IconButton component={Link} to="/cart" aria-label='Show cart items' color='inherit'>
                            <Badge badgeContent={cartSize} color='secondary'>
                                <ShoppingCart/>
                            </Badge>
                        </IconButton>

                    </div>)
                }
            </Toolbar>
        </AppBar>
    </>
  )
}

export default Navbax