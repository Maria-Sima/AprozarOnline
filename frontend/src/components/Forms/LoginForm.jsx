
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";


const LoginForm = ({img,submit}) => {
    const {register,handleSubmit,control,formState:{errors},watch}=useForm({
        mode:'onChange'
    });

    return (
        <div className='authcont'>
            <img src={img} alt="signup"/>

            <form className='authform' onSubmit={handleSubmit(submit)}>
                <h1>Login</h1>
                <div className='formgroup'>
                    <div className='formgroup'>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            id='email'
                            {...register('email', {
                                pattern: {
                                    value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                    message: 'Please enter a valid email',
                                },
                                required: 'Email is required',
                            })}
                        />
                        <p className="error">{errors.email?.message}</p>
                    </div>
                    <div className='formgroup'>
                        <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            id='password'
                            {...register('password', {
                                required: 'Password is required',
                                minLength: {
                                    value: 8,
                                    message: 'Password must be at least 8 characters',
                                },
                                validate: {
                                    containsUpperCharacter: (value) => {
                                        let reg = /(?=.*?[A-Z])/;
                                        return value.match(reg) !== null || 'Password must contain an uppercase letter';
                                    },
                                    containsLowerCharacter: (value) => {
                                        let reg = /(?=.*?[a-z])/;
                                        return value.match(reg) !== null || 'Password must contain a lowercase letter';
                                    },
                                    containsSpecialCharacter: (value) => {
                                        let reg = /(?=.*?[#?!@$%^&*-])/;
                                        return value.match(reg) !== null || 'Password must contain a special character';
                                    },
                                    containsNumber: (value) => {
                                        let reg = /(?=.*?[0-9])/;
                                        return value.match(reg) !== null || 'Password must contain a number';
                                    },
                                },
                                maxLength: {
                                    value: 20,
                                    message: 'Password should not be longer than 20 characters',
                                },
                            })} autoComplete="off"
                        />
                        <p className="error">{errors.password?.message}</p>
                    </div>
                </div>

                <Link to='/forgotpassword' className='stylenone'>
                    <p>Forgot password?</p>
                </Link>

                <input type="submit" className="btn" value="Login" />

                <h2 className='or'>OR</h2>
                <Link to='/signup' className='stylenone'>
                    <button className='btn'>Signup</button>
                </Link>
            </form>
        </div>);
};

export default LoginForm;