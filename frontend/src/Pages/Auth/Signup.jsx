import img1 from "../../assets/pictures/moreVeges.jpg";
import './AuthPage.scss'
import { useAxiosPost} from "../../Api/Axios/useFetch.js";
import {routes} from "../../Api/Axios/Routes.jsx";
import AuthForm from "../../Components/Forms/AuthForm.jsx";


const Signup = () => {

const {post: registerUser, response}=useAxiosPost();

const signUp=(data)=> {

    registerUser(routes.register, data);

}

return (
<AuthForm submit={signUp} img={img1}/>


    )
}

export default Signup