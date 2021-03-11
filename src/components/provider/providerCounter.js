
import React, { createContext, useState } from 'react';
import { alertProvider } from "./alertProvider";
import { useAuth0 } from "@auth0/auth0-react";



export const ProductsContext = createContext({
    counter: 0,
    addProductToCart: () => { },
    products: [],
    deleteProduct: () => { },
    isAuthenticated: ""
})



const CounterProvider = ({ children }) => {
    const { isAuthenticated } = useAuth0();
    const [products, setProducts] = useState([]);
    const [counter, setCounter] = useState(0);



    const addProductToCart = (name, img, value) => {
        setProducts([{ name, img, value }, ...products]);
        counterValue(value)
        alertProvider(name)
    }
    const counterValue = (value) => {
        setCounter(prevValue => prevValue + value)
    }
    const counterAfterRemoveProduct = (value) => {
        setCounter(prevValue => prevValue - value)
    }
    const deleteProduct = (name, value) => {
        const deleteItems = products.filter((element) => element.name !== name)
        setProducts(deleteItems)
        counterAfterRemoveProduct(value)
    }
    return (<ProductsContext.Provider value={{
        counter,
        addProductToCart,
        products,
        deleteProduct,
        isAuthenticated: isAuthenticated
    }}>
        {children}
    </ProductsContext.Provider>
    )
}

export default CounterProvider;