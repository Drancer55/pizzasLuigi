import React, { createContext, useContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("No hay proveedor de contexto");
    return context;
};

export const Provider = ({ children }) => {

    const [shoppinCart, setShoppinCart] = useState(() => {
        try {
            const itemsLocalStorage = localStorage.getItem("cartProducts");
            return itemsLocalStorage ? JSON.parse(itemsLocalStorage) : [];
        } catch (error) {
            return [];
        }
    });
    
    useEffect(() => {
        localStorage.setItem("cartProducts", JSON.stringify(shoppinCart))
    }, [shoppinCart]);

    const addPizza = (item) => {
        const inCart = shoppinCart.find(
            (pizzaInCart) => pizzaInCart.id === item.id
        );

        if (inCart) {
            setShoppinCart(
                shoppinCart.map((pizzaInCart) => {
                    if (pizzaInCart.id === item.id) {
                        return { ...inCart, quantity: inCart.quantity + 1 };
                    } else return pizzaInCart;
                })
            );
        } else {
            setShoppinCart([...shoppinCart, { ...item, quantity: 1 }]);
        }
    };

    const deletePizzaInCart = (item) => {
        const inCart = shoppinCart.find(
            (pizzaInCart) => pizzaInCart.id === item.id
        );
        if (inCart.quantity === 1) {
            setShoppinCart(shoppinCart.filter(pizzaInCart => pizzaInCart.id !== item.id));
        } else {
            setShoppinCart(
                shoppinCart.map((pizzaInCart) => {
                    if (pizzaInCart.id === item.id) {
                        return { ...inCart, quantity: inCart.quantity - 1 }
                    } else return pizzaInCart;
                })
            );
        }
    }

    const deleteMultiPizza = (item) => {
        const inCart = shoppinCart.find(
            (pizzaInCart) => pizzaInCart.id === item.id
        );
        if (inCart.quantity === 1) {
            setShoppinCart(shoppinCart.filter(pizzaInCart => pizzaInCart.id !== item.id));
        } else {
            setShoppinCart(
                shoppinCart.map((pizzaInCart) => {
                    if (pizzaInCart.id === item.id) {
                        return { ...inCart, quantity: inCart.quantity - inCart.quantity };
                    } else return pizzaInCart;
                })
            );
        }
    };
    return (
        <AuthContext.Provider
            value={{
                shoppinCart,
                addPizza,
                deletePizzaInCart,
                deleteMultiPizza
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
