import img1 from "../../assets/pictures/moreVeges.jpg";
import './AuthPage.scss'
import { useAxiosPost} from "../../Api/Axios/useFetch.js";
import {routes} from "../../Api/Axios/Routes.jsx";
import AuthForm from "../../Components/Forms/AuthForm.jsx";
import Swal from 'sweetalert2'


const Signup = () => {

const {post: registerUser, response}=useAxiosPost();

const signUp=(data)=> {

    registerUser(routes.register, data);
    Swal.fire({
        title: "Success",
        text:
            "An email has been sent to your inbox. Check it and come back",
        icon: "success",
        buttons: {
            cancel: "Cancel",
            confirm: "Okay"
        },
        closeOnClickOutside: false
    });




}

return (
<AuthForm submit={signUp} img={img1}/>


    )
}

export default Signup