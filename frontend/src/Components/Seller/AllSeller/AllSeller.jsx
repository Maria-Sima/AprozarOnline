
import SellerCard from "../SellerCard/SellerCard.jsx";
import "./AllSeller.scss"
import {useGetAllSellersQuery} from "../../../reducers/aprozarApi.js";


const AllSeller = () => {
    const {
        data: apiData,
    } = useGetAllSellersQuery();


    return (
        <div className='allsellers'>
            <h1>Our Sellers</h1>
            <div className='sellers'>
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