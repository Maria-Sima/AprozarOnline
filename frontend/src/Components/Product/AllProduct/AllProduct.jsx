import ProductCard from '../ProductCard/ProductCard.jsx'
import './AllProduct.scss'
import {useGetProductsBySellerQuery} from "../../../reducers/apiSlice.js";
import {useEffect} from "react";


const AllProduct = ({sellerId}) => {

    const {data:apiData,isLoading,serverError}= useGetProductsBySellerQuery(sellerId);


    return (
        <div className='allproducts'>
            <h1>All Products</h1>
            <div className='products'>
                {
                    apiData?.map((item,index) => {
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