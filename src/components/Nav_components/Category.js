import React from 'react';

import { BrowserRouter, Link } from "react-router-dom";


import CategoryItem from "./CategoryItem";



const Category = () => {

    const navStyle = {
        textDecoration: "none"
    }

    return (
        <BrowserRouter>
            <Link style={navStyle} to="/Samsung">
                <CategoryItem value="Samsung" />
            </Link>
            <Link style={navStyle} to="/Iphone">
                <CategoryItem value="Iphone" />
            </Link>
            <Link style={navStyle} to="/Xiaomi">
                <CategoryItem value="Xiaomi" />
            </Link>
            <Link style={navStyle} to="/Huawei">
                <CategoryItem value="Huawei" />
            </Link>
        </BrowserRouter >
    )
}

export default Category;