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


const Home = () => {

  // const products = [
  //
  //   }
// ]
  return (
    <div>
      <Navbar reloadnavbar={false}/>
      <BannerSlider />
      <HomeCategories />

<Product_Sidebar />
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