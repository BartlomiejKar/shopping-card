import React from 'react';

import { Link } from "react-router-dom";


import CategoryItem from "./CategoryItem";



const Category = ({ onClick }) => {

    const navStyle = {
        textDecoration: "none",
        color: "black"
    }

    return (
        <>
            <Link onClick={onClick} style={navStyle} to="/samsung">
                <CategoryItem value="Samsung" />
            </Link>
            <Link onClick={onClick} style={navStyle} to="/iphone">
                <CategoryItem value="Iphone" />
            </Link>
            <Link onClick={onClick} style={navStyle} to="/xiaomi">
                <CategoryItem value="Xiaomi" />
            </Link>
            <Link onClick={onClick} style={navStyle} to="/huawei">
                <CategoryItem value="Huawei" />
            </Link>
        </>
    )
}

export default Category;