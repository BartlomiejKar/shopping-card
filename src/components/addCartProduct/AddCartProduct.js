
import React, { useContext } from 'react';
import styles from "./AddCartProduct.module.css"

import { ProductsContext } from "../provider/providerCounter"

const style = {
    textAlign: "center",
}


const AddCartProduct = () => {
    const { products, deleteProduct } = useContext(ProductsContext);
    const arrayItems = products.map(({ name, img }) => {
        return (

            <div className={styles.container} key={name}>
                <p className={styles.name} >{name}</p>
                <img className={styles.image} src={img} alt="product" />
                <button onClick={() => deleteProduct(name)} className={styles.button}>Remove product</button>
            </div>
        )

    })

    const emptyCart = <div style={style}><h2>Your cart is empty</h2></div>
    return (
        <>
            <div>
                {arrayItems.length > 0 ? arrayItems : emptyCart}
            </div>
            <div className={styles.totalPrice}>
                <h3>Value:0</h3>
            </div>
        </>
    )
}

export default AddCartProduct;