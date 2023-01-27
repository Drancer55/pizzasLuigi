import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { GiFullPizza } from "react-icons/gi";
import ShoppinCart from './ShoppinCart';

export const NavBarLuigi = () => {
    return (
        // NavBar by Material Ui
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar variant="regular">
                    <GiFullPizza className='logo'/>
                <Typography variant="h5" component="div" className="name">
                    Pizzas Luigi
                </Typography>
                <ShoppinCart/>
                </Toolbar>
            </AppBar>
        </Box>
    );
}