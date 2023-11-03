import {Link} from "react-router-dom";
import {DevTool} from "@hookform/devtools";
import {useForm} from "react-hook-form";


const AuthForm = ({ submit, img }) => {

    const {register,handleSubmit,control,formState:{errors},watch}=useForm({
        mode:'onChange'
    });
    return (
        <div className='authpage'>
            <div className='authcont'>
                <img src={img} alt='signup' />
                <form className='authform'  onSubmit={handleSubmit(submit)} autoComplete="off">
                    <h1>Signup</h1>
                    <div className='form-group-row'>
                        <div className='formgroup'>
                            <label htmlFor='fname'>First Name</label>
                            <input type='text' id='fname' {...register('firstName', { required: "FirstName is required" })} />
                            <span className="error">{errors.firstName?.message}</span>
                        </div>
                        <div className='formgroup'>
                            <label htmlFor='lname'>Last Name</label>
                            <input type='text' id='lname' {...register('lastName', { required: "LastName is required" })} />
                            <span  className="error">{errors.lastName?.message}</span>
                        </div>
                    </div>
                    <div className='formgroup'>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            id='email'
                            {...register('email', {
                                pattern: {
                                    value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                    message: "Please enter a valid email"
                                },
                                required: "Email is required"
                            })}
                        />
                        <span className="error">{errors.email?.message}</span>
                    </div>
                    <div className='form-group-row'>
                        <div className='formgroup'>
                            <label htmlFor='password'>Password</label>
                            <input
                                type='password'
                                id='password'
                                {...register('password', { required: "Password is required" ,
                                    minLength:{
                                        value:8,
                                        message:'Password must be at least 8 characters'
                                    },
                                    validate:{
                                        containsUpperCharacter:(value)=>{

                                            let reg = /(?=.*?[A-Z])/;
                                            return (
                                                value.match(reg) !== null || "Password must contain an  uppercase letter"
                                            );},
                                        containsLowerCharacter:(value)=>{

                                            let reg = /(?=.*?[a-z])/;
                                            return (
                                                value.match(reg) !== null || "Password must contain a lowercase letter"
                                            );

                                        },
                                        containsSpecialCharacter:(value)=>{

                                            let reg = /(?=.*?[#?!@$%^&*-])/;
                                            return (
                                                value.match(reg) !== null || "Password must contain a special cahracter"
                                            );

                                        },
                                        containsNumber:(value)=>{

                                            let reg = /(?=.*?[0-9])/;
                                            return (
                                                value.match(reg) !== null || "Password must contain a number"
                                            );

                                        },


                                    },
                                    maxLength:{
                                        value:20,
                                        message:'Password should not be longer than 20 characters'
                                    }})} autoComplete="new-password"
                            />
                            <span className="error">{errors.password?.message}</span>
                        </div>
                        <div className='formgroup'>
                            <label htmlFor='cpassword'>Confirm Password</label>
                            <input
                                type='password'
                                id='cpassword'
                            autoComplete="new-password"
                                {...register("cpassword", {
                                    required: true,
                                    validate: (value) => {
                                        return value === watch('password') || "Passwords should match!";
                                    }
                                })}
                            />
                            <span className="error">{errors.cpassword?.message}</span>
                        </div>
                        <div className='formgroup'>
                            <label htmlFor='role'>Select Role</label>
                            <div className="select">
                            <select
                                {...register("role",{
                                    required: "select one option"
                                })}>
                                <option value="BUYER"> Cumpar</option>
                                <option value="SELLER">Vand</option>
                            </select>
                            <span className="error">{errors.role?.message}</span>
                        </div>
                        </div>
                    </div>

                    <Link to='/login' className='stylenone'>
                        <p>Already have an account?</p>
                    </Link>
                    <Link to='/signup' className='stylenone'></Link>
                    <input type="submit" className="btn" value="Register" />
                </form>
                <DevTool control={control} />
            </div>
        </div>
    );
};

export default AuthForm;