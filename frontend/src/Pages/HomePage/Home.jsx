
import BannerSlider from '../../Components/Banners/BannerSlider.jsx'
import HomeCategories from '../../Components/Category/HomeCategories.jsx'
import Footer1 from '../../Components/Footer/Footer1.jsx'
import Footer2 from '../../Components/Footer/Footer2.jsx'
import AllSeller from "../../Components/Seller/AllSeller/AllSeller.jsx";
import {routes} from "../../middleware/Routes.jsx";



const Home = () => {
    console.log(routes.auth.register)
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