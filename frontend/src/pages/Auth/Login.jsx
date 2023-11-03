import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import img from '../../assets/pictures/platou_trad.webp';
import LoginForm from '../../components/Forms/LoginForm.jsx';
import { useLoginUserMutation } from '../../reducers/apiSlice.js';
import { setAuthToken } from '../../reducers/authSlice.js';
import './AuthPage.scss';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginUser, { data: loginResponse, error }] = useLoginUserMutation();
  const login = async (data) => {
    try {
      await loginUser(data);
    } catch (err) {
      console.error('Unexpected error:', err);
    }
  };

  useEffect(() => {
    if (loginResponse) {
      dispatch(
        setAuthToken({
          token: loginResponse?.token,
          id: loginResponse?.appUserDTO.id,
          user: loginResponse?.appUserDTO,
        }),
      );
      navigate('/');
      console.log('Login successful:', loginResponse);
    } else {
      console.log(error);
    }
  }, [loginResponse, navigate, dispatch]);

  return <LoginForm img={img} submit={login} />;
};

export default Login;
