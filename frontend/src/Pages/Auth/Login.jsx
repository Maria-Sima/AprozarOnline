import './AuthPage.scss'
import {getAuthToken, setAuthToken, useAxiosPost} from "../../Api/Axios/useFetch.js";
import LoginForm from "../../Components/Forms/LoginForm.jsx";
import {routes} from "../../Api/Axios/Routes.jsx";
import img from "../../assets/pictures/platou_trad.webp"
import {useEffect} from "react";
import {useNavigate} from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const {post: loginUser, response} = useAxiosPost();
    const login = (data) => {
        loginUser(routes.login, data);
        console.log(routes.login);
    };

    useEffect(() => {
        console.log(response);
        if (response && response.token) {
            console.log(response.appUserDTO.id);
            setAuthToken(response.token,response.appUserDTO.id);
            navigate("/");

        }
    }, [response]);
    return (<LoginForm img={img} submit={login}/>)
}

export default Login