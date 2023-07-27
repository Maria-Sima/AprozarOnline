// import React, { useEffect, useState } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import { toast } from 'react-toastify';
//
// import Footer1 from '../../Components/Footer/Footer1.jsx';
// import Footer2 from '../../Components/Footer/Footer2.jsx';
// import ProductsSlider from '../../Components/Product/ProductSlider/ProductsSlider.jsx';
// import './ProductDetails.scss';
// import {useAxiosGet} from "../../Api/Axios/useFetch.js";
// import {routes} from "../../Api/Axios/Routes.jsx";
//
// const ProductDetails = () => {
//
//     const [count, setcount] = useState(1);
//     const {productId} = useParams();
//
//     const productInfo = useAxiosGet(routes.productUtil + productId);
//     const {apiData: product, isLoading, serverError} = productInfo;
//
//     const addtocart = () => {
//         let cart = JSON.parse(localStorage.getItem('cart'));
//
//         if (cart) {
//             let itemincart = cart.find(item => item.productdata.id === productId);
//             if (itemincart) {
//                 cart = cart.map(item => {
//                     if (item.productdata.id === productId) {
//                         return {
//                             ...item,
//                             quantity: item.quantity + count
//                         };
//                     } else {
//                         return item;
//                     }
//                 });
//                 localStorage.setItem('cart', JSON.stringify(cart));
//             } else {
//                 cart = [
//                     ...cart,
//                     {
//                         productdata,
//                         quantity: count
//                     }
//                 ];
//                 localStorage.setItem('cart', JSON.stringify(cart));
//             }
//         } else {
//             cart = [
//                 {
//                     productdata,
//                     quantity: count
//                 }
//             ];
//             localStorage.setItem('cart', JSON.stringify(cart));
//         }
//         toast.success('Item added to cart');
//     };
//     console.log(`${routes.productsByCategory}${product?.productType}`)
//     return (
//         <div className='productpage'>
//             <div className='pc1'>
//                 <Link to='/'>
//                     <button className='goback'>
//                         <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5}
//                              stroke='currentColor' className='w-6 h-6'>
//                             <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5L8.25 12l7.5-7.5'/>
//                         </svg>
//                         Go Back
//                     </button>
//                 </Link>
//                 <div className='c11'>
//                     <div className='imgbig'>
//                         <img src={product?.photoUrl} alt=''/>
//                     </div>
//                 </div>
//                 <div className='c12'>
//                     <div className='productinfo'>
//                         <h1>{product?.name}</h1>
//                         <p className='description'>{product?.description}</p>
//                         <div className='price'>
//                             <span className='currency'>$</span>
//                             <span className='value'>{product?.price}</span>
//                         </div>
//                         <div className='quantity'>
//                             <button
//                                 className='minus'
//                                 onClick={() => {
//                                     if (count > 1) {
//                                         setcount(count - 1);
//                                     }
//                                 }}
//                             >
//                                 -
//                             </button>
//                             <span className='count'>{count}</span>
//                             <button
//                                 className='plus'
//                                 onClick={() => {
//                                     setcount(count + 1);
//                                 }}
//                             >
//                                 +
//                             </button>
//                         </div>
//                         <button className='addtocart' onClick={addtocart}>
//                             Add to Cart
//                         </button>
//                     </div>
//                 </div>
//             </div>
//             <div className='c14'>
//                 <div className='slidercont'>
//                     <ProductsSlider url={`seller/${product?.sellerId}/myproducts`} categoryname='Related Products'/>
//                 </div>
//                 <div className='slidercont'>
//
//                     <ProductsSlider url={`${routes.productsByCategory}${product?.productType}`}
//                                     categoryname='Explore More'/>
//                 </div>
//             </div>
//             <Footer1/>
//             <Footer2/>
//         </div>
//     )
// }
// export default ProductDetails;
