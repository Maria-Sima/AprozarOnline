import {useParams} from "react-router-dom";
import SingleBanner from "../../Components/Banners/SingleBanner.jsx";
import Footer1 from "../../Components/Footer/Footer1.jsx";
import Footer2 from "../../Components/Footer/Footer2.jsx";
import Loader from "../../Components/Loader/Loader.jsx";
import Product_Sidebar from "../../Components/Product/ProductSidebar/Product_Sidebar.jsx";
import {useGetProductsBySellerQuery, useGetSellerInfoQuery} from "../../reducers/apiSlice.js";

const SellerPage = () => {
    const {sellerId} = useParams();
    const {
        data: seller,
        isLoading,
    } = useGetSellerInfoQuery(sellerId);
const {data:products}=useGetProductsBySellerQuery(sellerId);
    return (<div>
            {isLoading ? (<Loader/>) : (<>
                    <SingleBanner bannerimage={seller?.imageUrl} heading={seller?.firstName + " " +seller?.lastName}/>
                    <Product_Sidebar products={products}/>
                </>)}

            <Footer1/>
            <Footer2/>

        </div>);
};

export default SellerPage;