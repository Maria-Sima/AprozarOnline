import Swal from 'sweetalert2';
import img1 from '../../assets/pictures/moreVeges.jpg';
import AuthForm from '../../Components/Forms/AuthForm.jsx';
import { useRegisterUserMutation } from '../../reducers/apiSlice.js';
import './AuthPage.scss';

function Signup() {
  const [registerUser, { isSuccess ,serverError}] = useRegisterUserMutation();
  console.log(serverError)
  const signUp = async (data) => {
    await registerUser(data);
    if (isSuccess) {
      Swal.fire({
        title: 'Success',
        text: 'An email has been sent to your inbox. Check it and come back',
        icon: 'success',
        buttons: {
          confirm: 'Okay',
        },
        closeOnClickOutside: false,
      });
    } else {
      Swal.fire({
        title: 'Error',
        text: 'An error has occured',
        icon: 'error',
        buttons: {
          confirm: 'Okay',
        },
        closeOnClickOutside: false,
      });
    }
  };

  return <AuthForm submit={signUp} img={img1} />;
}

export default Signup;
