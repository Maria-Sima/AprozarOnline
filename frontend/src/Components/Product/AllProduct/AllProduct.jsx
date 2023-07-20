import ProductCard from '../ProductCard.jsx'
import {routes} from "../../../Api/Axios/Routes.jsx"
import './AllProduct.scss'
import {useAxiosGet} from "../../../Api/Axios/useFetch.js";

const AllProduct = () => {
    const products =  useAxiosGet(routes.products)

    const {apiData,isLoading,serverError}= products;
    console.log(apiData);
    return (
        <div className='allproducts'>
            <h1>All Products</h1>
            <div className='products'>
                {
                    apiData?.map((item,index) => {
                        console.log(item)
                        return (
                            <ProductCard data={item} key={index}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AllProduct