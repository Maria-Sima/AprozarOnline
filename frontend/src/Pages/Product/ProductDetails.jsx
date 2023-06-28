import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import Footer1 from '../../Components/Footer/Footer1.jsx';
import Footer2 from '../../Components/Footer/Footer2.jsx';
import ProductsSlider from '../../Components/Product/ProductsSlider.jsx';
import './ProductDetails.scss';

const ProductDetails = () => {
    const [productdata, setproductdata] = useState({});
    const [count, setcount] = useState(1);
    const [imageset, setimageset] = useState([]);
    const [activeimg, setactiveimg] = useState({});
    const [showreview, setshowreview] = useState(false);
    const [rating, setrating] = useState(0);
    const [reloadnavbar, setreloadnavbar] = useState(false);

    const { productId } = useParams();

    const getproductdatabyid = async () => {
        // Fetch product data by ID and update the state
    };

    useEffect(() => {
        getproductdatabyid();
        window.scroll(0, 0);
    }, []);

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
                        <div className='rating'>
                    <span className='stars'>
                        {[1, 2, 3, 4, 5].map((star, index) => (
                            <svg
                                key={index}
                                xmlns='http://www.w3.org/2000/svg'
                                fill={rating >= star ? '#FFC107' : 'none'}
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                                strokeWidth={2}
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                className='w-4 h-4 star'
                                onClick={() => setrating(star)}
                            >
                                <path d='M12 17l-5 4 1.5-6L2 9l6.5-.5L12 3l3.5 5.5L22 9l-6.5.5L12 17z' />
                            </svg>
                        ))}
                    </span>
                            <span className='ratingtext'>{rating > 0 ? rating : 'No'} reviews</span>
                        </div>
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
