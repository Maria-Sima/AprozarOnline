import {useEffect, useRef, useState} from 'react'
import AllProduct from '../AllProduct/AllProduct.jsx'
import CategorySidebar from '../CategorySidebar/CategorySidebar.jsx'
import './Product_Sidebar.scss'
import {useSelector} from "react-redux";
const Product_Sidebar = ({products}) => {
    const [category, setCategory] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(products);
    const searchQuery = useSelector((state) => state.search);
    console.log(searchQuery)
    useEffect(() => {

        if (products) {
            let filteredByCategory = products;
            if (category !== '') {
                filteredByCategory = products?.filter(item => item.productCategory === category);
            }

            const filteredBySearch = searchQuery
                ? filteredByCategory.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
                : filteredByCategory;

            setFilteredProducts(filteredBySearch);
        }
    }, [category, products, searchQuery]);
  return (
    <div className='product_sidebar' >
        <CategorySidebar setCategory={setCategory} category={category}/>
        <AllProduct products={filteredProducts}/>
    </div>
  )
}

export default Product_Sidebar