import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import Footer1 from '../../Components/Footer/Footer1.jsx';
import Footer2 from '../../Components/Footer/Footer2.jsx';
import ProductsSlider from '../../Components/Product/ProductsSlider.jsx';
import './ProductDetails.scss';
import {useAxiosGet} from "../../Api/Axios/useFetch.js";
import {routes} from "../../Api/Axios/Routes.jsx";

const ProductDetails = () => {
    const [productdata, setproductdata] = useState({});
    const [count, setcount] = useState(1);
    const [imageset, setimageset] = useState([]);
    const [activeimg, setactiveimg] = useState({});
    const [reloadnavbar, setreloadnavbar] = useState(false);

    const { productId } = useParams();

   const productData= useAxiosGet(routes.productUtil+productId)



    const addtocart = () => {
        let cart = JSON.parse(localStorage.getItem('cart'));

        if (cart) {
            let itemincart = cart.find(item => item.productdata.ProductId === productdata.ProductId);
            if (itemincart) {
                cart = cart.map(item => {
                    if (item.productdata.ProductId === productdata.ProductId) {
                        return {
                            ...item,
                            quantity: item.quantity + count
                        };
                    } else {
                        return item;
                    }
                });
                localStorage.setItem('cart', JSON.stringify(cart));
            } else {
                cart = [
                    ...cart,
                    {
                        productdata,
                        quantity: count
                    }
                ];
                localStorage.setItem('cart', JSON.stringify(cart));
            }
        } else {
            cart = [
                {
                    productdata,
                    quantity: count
                }
            ];
            localStorage.setItem('cart', JSON.stringify(cart));
        }
        setreloadnavbar(!reloadnavbar);
        toast.success('Item added to cart');
    };

    return (
        <div className='productpage'>
            <div className='pc1'>
                <Link to='/'>
                    <button className='goback'>
                        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
                            <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5L8.25 12l7.5-7.5' />
                        </svg>
                        Go Back
                    </button>
                </Link>
                <div className='c11'>
                    <div className='imgset'>
                        {imageset &&
                            imageset.map((item, index) => (
                                <div
                                    className='imgsmall'
                                    key={item.id}
                                    onClick={() => {
                                        setactiveimg(item);
                                    }}
                                >
                                    <img src={item.image} alt='' className={activeimg.id === item.id ? 'active' : ''} />
                                </div>
                            ))}
                    </div>
                    <div className='imgbig'>
                        <img src={activeimg ? activeimg.image : (productdata && productdata.image)} alt='' />
                    </div>
                </div>
                <div className='c12'>
                    <div className='productinfo'>
                        <h1>{productdata && productdata.name}</h1>
                        <p className='description'>{productdata && productdata.description}</p>
                        <div className='price'>
                            <span className='currency'>$</span>
                            <span className='value'>{productdata && productdata.price}</span>
                        </div>
                        <div className='quantity'>
                            <button
                                className='minus'
                                onClick={() => {
                                    if (count > 1) {
                                        setcount(count - 1);
                                    }
                                }}
                            >
                                -
                            </button>
                            <span className='count'>{count}</span>
                            <button
                                className='plus'
                                onClick={() => {
                                    setcount(count + 1);
                                }}
                            >
                                +
                            </button>
                        </div>
                        <button className='addtocart' onClick={addtocart}>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
            <div className='c14'>
                <h2>Related Products</h2>
                <ProductsSlider />
            </div>
            <Footer1 />
            <Footer2 />
        </div>

    );
};

export default ProductDetails;
