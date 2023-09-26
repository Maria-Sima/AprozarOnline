import  {useRef} from 'react';
import {Link, useLocation, useParams} from "react-router-dom";
import {useAxiosPost} from "../../Api/Axios/useFetch.js";
import {routes} from "../../Api/Axios/Routes.jsx";

const ResetPassword = () => {

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);


    const token = queryParams.get('token');
    console.log(token)
    const inputRef=useRef();
    const {post: sendResetLink}=useAxiosPost();
    const verifyEmail=(e)=>{
        e.preventDefault();
        console.log(inputRef.current.value)
        const resetPasswordRequest={
            token:token,
            password:inputRef.current.value
        }
        sendResetLink(routes.resetPassword,resetPasswordRequest)



    }
    return (
        <div className='authpage'>
            <div className='authcont'>
                <img src='https://images.unsplash.com/photo-1495480137269-ff29bd0a695c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80'
                     alt='signup' />
                <form className='authform' onSubmit={verifyEmail}>
                    <h1>Reset Password</h1>
                    <div className='form-group-row'>
                        <div className='formgroup'>
                            <label htmlFor='password'>Password</label>
                            <input type='password' id='password' ref={inputRef}/>
                        </div>
                    </div>
        <Link to='/login'
              className='stylenone'
        >
            <p>Try Login again?</p>
        </Link>

    <button className='btn' type="submit">Reset</button>
</form>
            </div>
        </div>
    );
};

export default ResetPassword;