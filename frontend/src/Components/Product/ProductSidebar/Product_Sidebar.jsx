import {useEffect, useRef, useState} from 'react'
import AllProduct from '../AllProduct/AllProduct.jsx'
import CategorySidebar from '../CategorySidebar/CategorySidebar.jsx'
import './Product_Sidebar.scss'
const Product_Sidebar = ({products}) => {
    const [category,setCategory]=useState('');
    const [filteredProducts, setFilteredProducts] = useState(products);
    const productSidebarRef = useRef();
    useEffect(() => {
        if (products){
        if (category !== '' ) {
            setFilteredProducts(products.filter(item => item.productCategory === category));
        } else {
            setFilteredProducts(products);
        }}
    }, [category, products]);
  return (
    <div className='product_sidebar' ref={productSidebarRef}>
        <CategorySidebar setCategory={setCategory} category={category}/>
        <AllProduct products={filteredProducts}/>
    </div>
  )
}

export default Product_Sidebar