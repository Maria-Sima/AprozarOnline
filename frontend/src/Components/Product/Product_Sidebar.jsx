import React from 'react'
import AllProduct from './AllProduct.jsx'
import CategorySidebar from './CategorySidebar.jsx'
import './Product_Sidebar.scss'
const Product_Sidebar = () => {
  return (
    <div className='product_sidebar'>
        <CategorySidebar/>
        <AllProduct/>
    </div>
  )
}

export default Product_Sidebar