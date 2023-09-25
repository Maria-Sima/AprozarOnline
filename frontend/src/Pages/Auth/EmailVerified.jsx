import {useNavigate, useParams} from "react-router-dom";
import {useAxiosPost} from "../../Api/Axios/useFetch.js";
import {routes} from "../../Api/Axios/Routes.jsx";
import Swal from 'sweetalert2'
import {useEffect} from "react";
const EmailVerified = () => {
    const { '*': token }=useParams();
    const navigate=useNavigate();
    const {post: verifyEmail}=useAxiosPost();
const verifyEmailLink=()=>{
    verifyEmail(routes.verifyEmail,token);
    navigate("")
}
    useEffect(() => {
        verifyEmailLink();
    }, []);
    return (
        Swal.fire({
            title: "Your Email has been verified",
            text:
                "You can go back to shopping",
            icon: "success",
            buttons: {
                cancel: "Cancel",
                confirm: "Okay"
            },
            closeOnClickOutside: false
        })
    );
};

export default EmailVerified;