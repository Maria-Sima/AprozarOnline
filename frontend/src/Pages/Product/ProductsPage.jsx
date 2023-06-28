import Product_Sidebar from "../../Components/Product/Product_Sidebar.jsx";
import React from "react";
import Footer1 from "../../Components/Footer/Footer1.jsx";
import Footer2 from "../../Components/Footer/Footer2.jsx";


const ProductsPage = () => {
    return (
        <div>
            <Product_Sidebar />
            <Footer1 />
            <Footer2/>
        </div>
    );
};

export default ProductsPage;