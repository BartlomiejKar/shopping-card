
import React, { useContext } from 'react';
import styles from "./AddCartProduct.module.css"

import { ProductsContext } from "../provider/providerCounter"

const style = {
    textAlign: "center",
}


const AddCartProduct = () => {
    const { products, deleteProduct, counter, isAuthenticated } = useContext(ProductsContext);
    const arrayItems = products.map(({ name, img, value }) => {
        return (
            <div className={styles.container} key={name}>
                <p className={styles.name} >{name}</p>
                <img className={styles.image} src={img} alt="product" />
                <button onClick={() => deleteProduct(name, value)} className={styles.button}>Usuń produkt</button>
                <h4 className={styles.value}>{value + " PLN"}</h4>
            </div>
        )

    })
    const checkLoginUser = <div style={style}><h2>Zaloguj się by móc dodać przedmioty do koszyka</h2></div>
    const userIsLogged = <div style={style}><h2>Twój koszyk jest pusty</h2></div>
    const emptyCart = isAuthenticated ? userIsLogged : checkLoginUser
    return (
        <>
            <div>
                {arrayItems.length > 0 ? arrayItems : emptyCart}
            </div>
            <div className={styles.totalPrice}>
                <h3>Wartość: {counter + " PLN"}  </h3>
            </div>
        </>
    )
}

export default AddCartProduct;