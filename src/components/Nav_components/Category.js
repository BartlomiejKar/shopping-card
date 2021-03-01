import React from 'react';

import { Link } from "react-router-dom";


import CategoryItem from "./CategoryItem";



const Category = () => {

    const navStyle = {
        textDecoration: "none",
        color: "black"
    }

    return (
        <>
            <Link style={navStyle} to="/samsung">
                <CategoryItem value="Samsung" />
            </Link>
            <Link style={navStyle} to="/iphone">
                <CategoryItem value="Iphone" />
            </Link>
            <Link style={navStyle} to="/xiaomi">
                <CategoryItem value="Xiaomi" />
            </Link>
            <Link style={navStyle} to="/huawei">
                <CategoryItem value="Huawei" />
            </Link>
        </>
    )
}

export default Category;