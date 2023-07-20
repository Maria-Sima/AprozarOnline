import {useAxiosGet} from "../../Api/Axios/useFetch.js";
import {routes} from "../../Api/Axios/Routes.jsx"
import SellerCard from "./SellerCard.jsx";
import "./AllSeller.scss"

const AllSeller = () => {
    const stores =  useAxiosGet(routes.stores)

    const {apiData,isLoading,serverError}= stores;

    return (
        <div className='allstores'>
            <h1>Our Sellers</h1>
            <div className='stores'>
            {
                apiData?.map((item,index) => {


                    return (
                        <SellerCard key={index} item={item}/>
                    )
                })
            }
        </div>
        </div>
    );
};

export default AllSeller;