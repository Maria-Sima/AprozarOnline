import {useRef} from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import './AuthPage.scss'
import {routes} from "../../Api/Axios/Routes.jsx";
import {useForgotPasswordMutation} from "../../reducers/aprozarApi.js";
const ForgotPassword = () => {

    const inputRef=useRef();
    const [forgotPassword]=useForgotPasswordMutation()
    const verifyEmail=async (e)=>{
        e.preventDefault();
     await forgotPassword(inputRef.current.value)
        Swal.fire({
            title: "Email Sent",
            text:
                "The reset email has been sent! Use it to reset your password",
            icon: "warning",
            buttons: {
                confirm: "Okay"
            },
            closeOnClickOutside: false
        });

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