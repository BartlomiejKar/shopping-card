
import React, { createContext, useState } from 'react';

export const ProductsContext = createContext({
    addProductToCart: () => { },
    products: []
})



const CounterProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    console.log(products)


    const addProductToCart = (name, img) => {
        setProducts([{ name, img }, ...products]);
    }

    return (<ProductsContext.Provider value={{
        addProductToCart,
        products
    }}>
        {children}
    </ProductsContext.Provider>
    )
}

export default CounterProvider;