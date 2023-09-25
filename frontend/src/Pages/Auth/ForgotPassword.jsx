import React, {useRef, useState} from 'react'
import { Link } from 'react-router-dom'

import './AuthPage.scss'
import {useAxiosPost} from "../../Api/Axios/useFetch.js";
import {routes} from "../../Api/Axios/Routes.jsx";
const ForgotPassword = () => {
    const inputRef=useRef();
    const {post: sendResetLink}=useAxiosPost();
    const verifyEmail=(e)=>{
        e.preventDefault();
let formdata=new FormData()
formdata.append("email",inputRef.current.value)
        sendResetLink(routes.forgotPassword,formdata,{"Content-Type":" text/html"})
        console.log(routes.forgotPassword)

    }
    return (
        <div className='authpage'>
            <div className='authcont'>
                <img src='https://images.unsplash.com/photo-1495480137269-ff29bd0a695c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80'
                    alt='signup' />
                <form className='authform' onSubmit={verifyEmail}>
                    <h1>Forgot Password</h1>
                   
                    <div className='formgroup'>
                        <label htmlFor='email'>Email</label>
                        <input   type="email"
                                 id="email"
                                 name="email"
              ref={inputRef}
                                 required />
                    </div>

                    <Link to='/login'
                        className='stylenone'
                    >
                        <p>Try Login again?</p>
                    </Link>

                        <button className='btn' type="submit">Verify</button>
                </form>
            </div>
        </div>
    )
}

export default ForgotPassword