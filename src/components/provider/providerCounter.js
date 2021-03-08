
import React, { createContext, useState } from 'react';
import { alertProvider } from "./alertProvider"

export const ProductsContext = createContext({
    counter: 0,
    addProductToCart: () => { },
    products: [],
    deleteProduct: () => { },
})



const CounterProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [counter, setCounter] = useState(0)


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
    }}>
        {children}
    </ProductsContext.Provider>
    )
}

export default CounterProvider;