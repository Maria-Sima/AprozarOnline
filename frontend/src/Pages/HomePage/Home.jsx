import React from 'react'
import BannerSlider from '../../Components/Banners/BannerSlider.jsx'
import HomeCategories from '../../Components/Category/HomeCategories.jsx'
import Footer1 from '../../Components/Footer/Footer1.jsx'
import Footer2 from '../../Components/Footer/Footer2.jsx'
import Navbar from '../../Components/Navbar/Navbar.jsx'
import Product_Sidebar from '../../Components/Product/Product_Sidebar.jsx'
import img1 from'../../assets/pictures/apple.png'
import img2 from '../../assets/pictures/fruits.png'
import img3 from '../../assets/pictures/fruits.png'

import ProductsSlider from '../../Components/Product/ProductsSlider.jsx'
import SellerCard from "../../Components/Seller/SellerCard.jsx";
import {useAxiosGet} from "../../Api/Axios/useFetch.js";
import {routes} from "../../Api/Axios/Routes.jsx";
import AllSeller from "../../Components/Seller/AllSeller.jsx";


const Home = () => {

const  data=useAxiosGet(routes.stores);
    const {apiData,isLoading,serverError}=data;
    console.log(apiData)
  return (
    <div>

      <BannerSlider />
      <HomeCategories />
        <AllSeller/>

{/*<Product_Sidebar />*/}
      {/*<div className='slidercont'>*/}
      {/*  <ProductsSlider products={products} categoryname='Related Products' />*/}
      {/*</div>*/}
      {/*<div className='slidercont'>*/}
      {/*  <ProductsSlider products={products} categoryname='Explore More' />*/}
      {/*</div>*/}
        <Footer1 />
      <Footer2 />
    </div>
  )
}

export default Home