import React from 'react'
import AllProduct from '../AllProduct/AllProduct.jsx'
import CategorySidebar from '../CategorySidebar/CategorySidebar.jsx'
import './Product_Sidebar.scss'
const Product_Sidebar = ({route}) => {
  return (
    <div className='product_sidebar'>
        <CategorySidebar/>
        <AllProduct route={route}/>
    </div>
  )
}

export default Product_Sidebar