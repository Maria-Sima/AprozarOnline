import ProductCard from '../ProductCard/ProductCard.jsx'
import './AllProduct.scss'


const AllProduct = ({products}) => {


    return (
        <div className='allproducts'>
            <h1>All Products</h1>
            <div className='products'>
                {
                    products?.map((item, index) => {
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