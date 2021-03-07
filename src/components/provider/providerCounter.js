
import React, { createContext, useState } from 'react';

export const ProductsContext = createContext({
    addProductToCart: () => { },
    products: [],
    deleteProduct: () => { },
})



const CounterProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    console.log(products)


    const addProductToCart = (name, img) => {
        setProducts([{ name, img }, ...products]);
    }

    const deleteProduct = (name) => {
        const deleteItems = products.filter((element) => element.name !== name)
        setProducts(deleteItems)
    }
    return (<ProductsContext.Provider value={{
        addProductToCart,
        products,
        deleteProduct,
    }}>
        {children}
    </ProductsContext.Provider>
    )
}

export default CounterProvider;