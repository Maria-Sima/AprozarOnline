import React from 'react';
import {useParams} from "react-router-dom";
import {useAxiosGet} from "../../Api/Axios/useFetch.js";
import SingleBanner from "../../Components/Banners/SingleBanner.jsx";
import {routes} from "../../Api/Axios/Routes.jsx";
import Footer1 from "../../Components/Footer/Footer1.jsx";
import Footer2 from "../../Components/Footer/Footer2.jsx";
import Loader from "../../Components/Loader/Loader.jsx";
import Product_Sidebar from "../../Components/Product/ProductSidebar/Product_Sidebar.jsx";

const SellerPage = () => {
    const {sellerId} = useParams();
    const storeData = useAxiosGet(routes.getSeller + sellerId);
    const {apiData: seller, isLoading, serverError} = storeData;
    console.log(sellerId)

    console.log(routes.getSeller + 1);
    console.log(seller)

    return (<div>
            {isLoading ? (<Loader/>) : (<>
                    <SingleBanner bannerimage={seller?.imageUrl} heading={seller?.firstName + " " +seller?.lastName}/>
                    <Product_Sidebar route={`seller/${sellerId}/products`}/>
                </>)}

            <Footer1/>
            <Footer2/>

        </div>);
};

export default SellerPage;