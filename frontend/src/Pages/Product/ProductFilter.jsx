import React from 'react';
import {useParams} from "react-router-dom";
import Product_Sidebar from "../../Components/Product/ProductSidebar/Product_Sidebar.jsx";

const ProductFilter = () => {
    const {category} = useParams();
    return (
        <div>
            <Product_Sidebar route={`seller/products/category/${category}`}/>
        </div>
    );
};

export default ProductFilter;