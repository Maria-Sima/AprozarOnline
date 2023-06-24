
import ProductCard from './ProductCard.jsx'
import {mainURL} from "../../Providers/Api/Routes.js"
import './AllProduct.scss'
import {useFetch} from "../../Providers/Api/useFetch.js";
const AllProduct = () => {
    const products = useFetch("GET",mainURL.urlBase,{})
    console.log(mainURL)
    const {data,isLoading,serverError}=products;
    console.log(data);
    return (
        <div className='allproducts'>
            <h1>All Products</h1>
            <div className='products'>
                {
                    data?.map((item,index) => {
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