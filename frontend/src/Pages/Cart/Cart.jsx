import  { useState} from 'react'
import SingleBanner from '../../Components/Banners/SingleBanner.jsx'
import Footer1 from '../../Components/Footer/Footer1.jsx'
import Footer2 from '../../Components/Footer/Footer2.jsx'
import './Cart.scss'
import './Progress.scss'
import './CartContainer.scss'
import './ShippingContainer.scss'
import './PaymentContainer.scss'
import {useNavigate} from "react-router-dom";
import OrderAddress from "../../Components/OrderAddress/OrderAddress.jsx";
import ShoppingCart from "../../Components/Cart/ShoppingCart.jsx";
import {useSelector} from "react-redux";

const Cart = () => {

  const [active, setactive] = useState(1)

  const navigate = useNavigate();

    const cartdata = useSelector((state) =>{
        console.log(state)
        state.cartData});
const authToken=useSelector((state)=>{state.auth.auth_token})
  const checklogin = () => {

    return !!authToken;
  }

 const goNextTo=(int)=>{
   cartdata.length > 0
       ? checklogin()
           ? setactive(int)
           : navigate('/login')
       : null;
 }


  return (
    <div>

      <SingleBanner
        heading="My ShoppingCart"
        bannerimage='https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
      />
      <div className='cart'>
        <div className='progress'>
          {
            active == 1 ?
              <div className='c11'
                onClick={() => {
                  goNextTo(1)
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
                <span>My ShoppingCart</span>

              </div>
              :
              <div className='c1'
                onClick={() => {
                 goNextTo(1)
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
                <span>My ShoppingCart</span>
              </div>
          }


          {
            active == 2 ?
              <div className='c11'
                onClick={() => {
                goNextTo(2)
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>

                <span>Shipping</span>

              </div>
              :
              <div className='c1'
                onClick={() => {
                 goNextTo(2)
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>

                <span>Shipping</span>
              </div>
          }

        </div>

        {
          active === 1 && <ShoppingCart/>

                }

        {
          active == 2 && <OrderAddress/>

        }

        {
          active == 1 && cartdata &&
          <div className='btns'>
            <button className='nextbtn'
              onClick={() => {
          goNextTo(2)
              }}
            >Next</button>
          </div>
        }

        {
          active == 2 &&
          <div className='btns'>
            <button className='backbtn'
              onClick={() => {
                checklogin() && setactive(1)
              }}
            >Back</button>
            <button className='nextbtn'
              onClick={() => {
               goNextTo(3)
              }}
            >Next</button>
          </div>
        }


      </div>
      <Footer1 />
      <Footer2 />
    </div>
  )
}

export default Cart