import {useDispatch, useSelector} from "react-redux";
import {removeFromCart, updateQuantity} from "../../reducers/cartSlice.js";

const ShoppingCart = () => {
    const dispatch = useDispatch();
    const cartData = useSelector((state) => state.cart.cartData);

    const removeItemFromCart = (index) => {
        console.log(index)
        dispatch(removeFromCart(index));
    };
    const increaseProductQuantity = (index) => {
        const product = cartData[index];
        if (product) {
            dispatch(updateQuantity(
                {productId: product.productdata.id, quantity: product.quantity + 1}
            ));
        }
    };
    const decreaseProductQuantity = (index) => {
        const product = cartData[index];
        if (product) {
            dispatch(updateQuantity(
                {productId: product.productdata.id, quantity: product.quantity - 1}
            ));

        }
    };

    return (<div className='cartcont'>
        {cartData.length > 0 ? <table className='carttable'>
            <thead>
            <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
                <th>Remove</th>
            </tr>
            </thead>
            <tbody>
            {cartData.map((item, index) => {
                return (<tr key={index} className="cartitemrow">
                    <td data-label="Product"
                    >
                        <div className='cartproduct'>
                            <img src={item.productdata.photoUrl}
                                 alt={item.productdata.name}/>
                            <p>{item.productdata.name}</p>
                        </div>
                    </td>

                    <td
                        data-label="Quantity"
                    >
                        <div className='quantity'>
                            <button className='minus'
                                    onClick={() => decreaseProductQuantity(index)}>
                                -
                            </button>
                            <span>{item.quantity}</span>
                            <button className='plus'
                                    onClick={() => increaseProductQuantity(index)}>
                                +
                            </button>
                        </div>
                    </td>

                    <td
                        data-label="Price"
                    >
                        <p>
                            $ {item.productdata.price ? item.productdata.price.toFixed(2) : 0.00}
                        </p>
                    </td>

                    <td>
                        <p> {(item.productdata.price * item.quantity).toFixed(2)} lei</p>
                    </td>

                    <td
                        data-label="Remove"
                    >
                        <div className='delbtn'
                             onClick={() => {
                                 removeItemFromCart(index)
                             }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>

                        </div>
                    </td>
                </tr>)
            })}
            </tbody>
        </table> : <div className='emptycart'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                 stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"/>
            </svg>

            <p>Your cart is empty</p>
        </div>}
    </div>);
};

export default ShoppingCart;