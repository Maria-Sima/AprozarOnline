import React from 'react'
import BannerSlider from '../../Components/Banners/BannerSlider.jsx'
import HomeCategories from '../../Components/Category/HomeCategories.jsx'
import Footer1 from '../../Components/Footer/Footer1.jsx'
import Footer2 from '../../Components/Footer/Footer2.jsx'
import {useAxiosGet} from "../../Api/Axios/useFetch.js";
import {routes} from "../../Api/Axios/Routes.jsx";
import AllSeller from "../../Components/Seller/AllSeller/AllSeller.jsx";
import Navbar from "../../Components/Navbar/Navbar.jsx";


const Home = () => {

const  data=useAxiosGet(routes.stores);
    const {apiData,isLoading,serverError}=data;
    console.log(routes.stores)
  return (
    <div>

      <BannerSlider />
      <HomeCategories />
        <AllSeller/>
        <Footer1 />
      <Footer2 />
    </div>
  )
}

export default Home