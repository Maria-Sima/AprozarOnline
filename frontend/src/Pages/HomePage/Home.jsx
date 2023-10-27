import BannerSlider from '../../Components/Banners/BannerSlider.jsx'
import HomeCategories from '../../Components/Category/HomeCategories.jsx'
import Footer1 from '../../Components/Footer/Footer1.jsx'
import Footer2 from '../../Components/Footer/Footer2.jsx'
import AllSeller from "../../Components/Seller/AllSeller/AllSeller.jsx";
import Product_Sidebar from "../../Components/Product/ProductSidebar/Product_Sidebar.jsx";
import {useGetAllProductsQuery} from "../../reducers/apiSlice.js";
import {useRef} from "react";


const Home = () => {
    const {data} = useGetAllProductsQuery();
    const productSidebarRef = useRef();


    const scrollToProductSidebar = () => {
        if (productSidebarRef.current) {
            productSidebarRef.current.scrollIntoView({behavior: 'smooth'});
        }
    };

    return (
        <div>

            <BannerSlider scrollToProductSidebar={scrollToProductSidebar} />
            <HomeCategories/>
            <div ref={productSidebarRef}>
                <Product_Sidebar products={data}/>
            </div>
            <AllSeller/>
            <Footer1/>
            <Footer2/>
        </div>
    )
}

export default Home