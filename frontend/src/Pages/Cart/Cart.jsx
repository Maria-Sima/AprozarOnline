import  { useState} from 'react'
import SingleBanner from '../../Components/Banners/SingleBanner.jsx'
import Footer1 from '../../Components/Footer/Footer1.jsx'
import Footer2 from '../../Components/Footer/Footer2.jsx'
import './Cart.scss'
import './Progress.scss'
import './CartContainer.scss'
import './ShippingContainer.scss'
import './PaymentContainer.scss'
import './OrderSucessfull.scss'
import { useRecoilState } from 'recoil'
import { orderSuccessfulProvider } from '../../Api/OrderSuccessfulProvider.jsx'
import OrderSuccessful from '../../Components/Order/OrderSuccessful.jsx'
import {getAuthToken} from "../../Api/Axios/useFetch.js";
import {useNavigate} from "react-router-dom";
import OrderAddress from "../../Components/OrderAddress/OrderAddress.jsx";

const ShoppingCart = () => {

  const [active, setactive] = useState(1)

  const navigate = useNavigate();
    const [subtotal, setsubtotal] = useState(0)
    const [cartdata, setcartdata] = useState([])



  const checklogin = () => {

    return !!getAuthToken();
  }

 const goNextTo=(int)=>{
   cartdata.length > 0
       ? checklogin()
           ? setactive(int)
           : navigate('/login')
       : null;
 }


 const [selectedorderid, setselectedorderid] = useState(0)
  const [ordersuccesscont, setordersuccesscont] = useRecoilState(orderSuccessfulProvider)
  return (
    <div>

      {
        ordersuccesscont && <OrderSuccessful orderid={selectedorderid} message={`Order Placed Successfully, Order ID: ${selectedorderid}`}  redirecto='userorders'/>
      }
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

          {
            active === 3 ?
              <div className='c11'
                onClick={() => {
                goNextTo(3)
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                </svg>


                <span>Payment</span>

              </div>
              :
              <div className='c1'
                onClick={() => {
                 goNextTo(3)
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                </svg>

                <span>Payment</span>
              </div>
          }
          {
            active == 4 ?
              <div className='c11'
                onClick={() => {
                 goNextTo(4)
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>

                <span>Success</span>

              </div>
              :
              <div className='c1'
                onClick={() => {
                 goNextTo(4)
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>


                <span>Success</span>
              </div>
          }
        </div>

        {
          // active === 1 && <ShoppingCart navigate={navigate} setsubtotal={setsubtotal} cartdata={cartdata} setcartdata={setcartdata}/>

                }

        {
          active == 2 && <OrderAddress/>

        }
        {
          active == 3 &&
          <div className='paymentcont'>
            <h2 className='mainhead1'>Select Payment Method</h2>
            <div className='paymenttypes'>
              <div className='c1'>
                <input type='radio' name='payment' id='payment1' />
                <img src='https://www.paypalobjects.com/webstatic/en_US/i/buttons/PP_logo_h_100x26.png'
                  alt='paypal'
                />
              </div>
              <div className='c1'>
                <input type='radio' name='payment' id='payment1' />
                <img src='https://www.paypalobjects.com/webstatic/en_US/i/buttons/PP_logo_h_100x26.png'
                  alt='paypal'
                />
              </div>
              <div className='c1'>
                <input type='radio' name='payment' id='payment1' />
                <img src='https://www.paypalobjects.com/webstatic/en_US/i/buttons/PP_logo_h_100x26.png'
                  alt='paypal'
                />
              </div>
            </div>

            <div
              className='paymentagreement'
            >
              <input type='checkbox' name='agreement' id='agreement' />
              <label htmlFor='agreement'>I agree to the terms and conditions</label>
            </div>

            <div className='c2'>
              <span>Net Total</span>
              &nbsp;&nbsp;
              <span>$ {(subtotal ).toFixed(2)}</span>
            </div>
          </div>
        }
        {
          active == 4 &&
          <div className='ordersuccessfull'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
            </svg>

            <h2 className='mainhead1'>Order Placed Successfully</h2>
            <p>Thank you for shopping with us</p>
            <span>Order ID : 12345</span>
          </div>
        }





        {
          active == 1 && cartdata.length > 0 &&
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

        {
          active == 3 &&
          <div className='btns'>
            <button className='backbtn'
              onClick={() => {
                goNextTo(2)
              }}
            >Back</button>
            <button className='nextbtn'
              onClick={() => {
               goNextTo(4)
              }}
            >Next</button>
          </div>
        }
        {
          active == 4 &&
          <div className='btns'>
           <button className='backbtn'
              onClick={() => {
               goNextTo(3)
              }}
            >Back</button>
            <button className='nextbtn'
              onClick={() => {
                setselectedorderid(12345)
                setordersuccesscont(true)
              }}
            >View Invoice</button>
          </div>
        }
      </div>
      <Footer1 />
      <Footer2 />
    </div>
  )
}

export default Cart