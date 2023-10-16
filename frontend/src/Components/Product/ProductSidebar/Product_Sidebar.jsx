import  {useState} from 'react'
import AllProduct from '../AllProduct/AllProduct.jsx'
import CategorySidebar from '../CategorySidebar/CategorySidebar.jsx'
import './Product_Sidebar.scss'
const Product_Sidebar = ({sellerId}) => {
    const [category,setCategory]=useState('');
  return (
    <div className='product_sidebar'>
        <CategorySidebar setCategory={setCategory}/>
        <AllProduct sellerId={sellerId}/>
    </div>
  )
}

export default Product_Sidebar