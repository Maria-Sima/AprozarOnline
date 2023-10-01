import './AuthPage.scss'
import { useAxiosPost} from "../../Api/Axios/useFetch.js";
import LoginForm from "../../Components/Forms/LoginForm.jsx";
import {routes} from "../../Api/Axios/Routes.jsx";
import img from "../../assets/pictures/platou_trad.webp"
import {useEffect} from "react";
import {useNavigate} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {setAuthToken} from "../../reducers/authReducer.js";

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const {post: loginUser, response} = useAxiosPost();
    const login = (data) => {
        loginUser(routes.login, data);
    };

    useEffect(() => {
        if (response && response.token) {
            console.log(response.appUserDTO.id);
            dispatch(setAuthToken({token: response.token, id: response.appUserDTO.id,user:response.appUserDTO}));
            navigate("/");
        }
    }, [response, navigate, dispatch]);

    return (<LoginForm img={img} submit={login}/>)
}

export default Login