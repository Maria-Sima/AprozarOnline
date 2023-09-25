import React, {useState} from 'react'
import AllProduct from '../AllProduct/AllProduct.jsx'
import CategorySidebar from '../CategorySidebar/CategorySidebar.jsx'
import './Product_Sidebar.scss'
const Product_Sidebar = ({route}) => {
    const [category,setCategory]=useState('');
    console.log(route)
  return (
    <div className='product_sidebar'>
        <CategorySidebar setCategory={setCategory}/>
        <AllProduct route={route}/>
    </div>
  )
}

export default Product_Sidebar