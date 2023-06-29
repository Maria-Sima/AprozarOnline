import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom';
import {useForm, useWatch} from "react-hook-form";
import img from "../../assets/pictures/moreVeges.jpg";
import './AuthPage.scss'
import {AiFillEyeInvisible,AiFillEye} from "react-icons/ai";
import {DevTool} from "@hookform/devtools";
import {useAxiosPost} from "../../Providers/Api/useFetch.js";
import {routes} from "../../Providers/Api/Routes.jsx";

const Signup = () => {
    const {register,handleSubmit,control,formState:{errors},watch}=useForm({
        mode:'onChange'
    });
const registerUser=useAxiosPost();

const signUp=(data)=>{
    registerUser(routes.register,data);
    console.log(routes.register)
}
    return (
        <div className='authpage'>
            <div className='authcont'>
                <img src={img} alt='signup' />

                <form className='authform' onSubmit={handleSubmit(signUp)} noValidate>
                    <h1>Signup</h1>
                    <div className='form-group-row'>
                        <div className='formgroup'>
                            <label htmlFor='fname'>First Name</label>
                            <input type='text' id='fname' {...register('firstName', { required: "FirstName is required" })} />
                            <p className="error">{errors.firstName?.message}</p>
                        </div>
                        <div className='formgroup'>
                            <label htmlFor='lname'>Last Name</label>
                            <input type='text' id='lname' {...register('lastName', { required: "LastName is required" })} />
                            <p className="error">{errors.lastName?.message}</p>
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
                        <p className="error">{errors.email?.message}</p>
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
                                }})}
                            />
                            <p className="error">{errors.password?.message}</p>
                        </div>
                        <div className='formgroup'>
                            <label htmlFor='cpassword'>Confirm Password</label>
                            <input
                                type='password'
                                id='cpassword'
                                {...register("cpassword", {
                                    required: true,
                                    validate: (value) => {
                                        return value === watch('password') || "Passwords should match!";
                                    }
                                })}
                            />
                            <p className="error">{errors.cpassword?.message}</p>
                        </div>
                        <div className='formgroup'>
                            <label htmlFor='role'>select your role</label>
                            <select
                                    {...register("role",{
                                        required: "select one option"
                                    })}>
                                <option value="BUYER"> Here to buy</option>
                                <option value="SELLER">Here to sell</option>
                            </select>
                            <p className="error">{errors.role?.message}</p>
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

    )
}

export default Signup