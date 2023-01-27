import React, { useContext } from 'react';
import { AuthContext } from '../context/Context';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { GoTrashcan } from "react-icons/go";
import './pizzaCart.css';

// Carrito de compras
const PizzaCart = ({food}) => {

    const { addPizza, deletePizzaInCart, deleteMultiPizza} = useContext(AuthContext);

    return (
        <div className='totalRow'>
            {/* Nombre e imagen en el carrito */}
            <img className='cart-img' src={food.img} alt={food.name} />
            <div className='cart-sellName'>
                {food.name}
            </div>
            {/* cantidades y calculo de precios */}
            <button className='cart-btnmin' onClick={() => deletePizzaInCart(food)}><AiOutlineMinusCircle /></button>
            <p className='quantity'>{food.quantity}</p>
            <button className='cart-btnplus' onClick={() => addPizza(food)}><AiOutlinePlusCircle /></button>
            <p className='quantity'>${ food.price * food.quantity}.00</p>
            <br />
            <button onClick={() => deleteMultiPizza(food)} className="cart-btnTrash"><GoTrashcan/></button>
        </div>    
    )
}

export default PizzaCart