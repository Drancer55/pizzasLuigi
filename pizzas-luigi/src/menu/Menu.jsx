import React, {Component} from 'react';
import { AuthContext, useAuth } from '../context/Context';
import { CiPizza } from "react-icons/ci";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Pizzas } from '../ordersData/dataPizza'
import {NavBarLuigi} from '../navbarCart/NavBar'
import './menu.css';

export const Menu = () => {
// Cards con información de los productos
  const { addPizza } = useAuth(AuthContext);

  return (
    <div className='menu'>
      <NavBarLuigi/>
      <h1 className='menu-title'>Menu</h1>
      <div className='menu-content'>
        {Pizzas.map((food, i) => (
          <>
            <Card sx={{ maxWidth: 250, borderRadius: 5, minWidth: 248}}>
              <CardMedia
                component="img"
                height="140"
                image={food.img}
                alt="menú"
              />
              <CardContent className="card-content">
                <Typography gutterBottom variant="h5" component="div">
                  {food.name}
                </Typography>
                <Typography variant="body2" color="text.primary" fontSize={10}>
                  {food.ingredients + " "}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {"$" + food.price + ".00"}
                </Typography>
              </CardContent>
              <CardActions className='card-footer'>
                <button className='addCart' onClick={() => addPizza(food)}>
                  <CiPizza/> Agregar al carrito <CiPizza/>
                </button>
              </CardActions>
            </Card>
          </>
        ))}
      </div>
    </div>
  )
}
