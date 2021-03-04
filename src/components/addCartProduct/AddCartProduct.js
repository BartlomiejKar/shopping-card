
import React, { useContext } from 'react';

import { ProductsContext } from "../provider/providerCounter"

const AddCartProduct = () => {
    const { products } = useContext(ProductsContext);
    const arrayItems = products.map(({ name, img }) => {
        return (
            <div key={name}>
                <p>{name}</p>
                <img src={img} alt="product" />
            </div>
        )

    })
    return (
        <div>
            {arrayItems}
        </div>
    )
}

export default AddCartProduct;