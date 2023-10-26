
import {useForm} from "react-hook-form";
import {DevTool} from "@hookform/devtools";
import {useSelector} from "react-redux";


const ChangePassword = () => {
    const {register, handleSubmit, control, formState: {errors}, watch} = useForm({
        mode: 'onChange'
    });
    const customerId=useSelector(state => state.auth.user_id)
    const changePassword=(data)=> {



    }

    return (
        <div className='accountsettings'>
            <h1 className='mainhead1'>Change Password</h1>

            <form className='form' onSubmit={handleSubmit(changePassword)}>
                <div className='form-group'>
                    <label htmlFor='oldpass'>Old Password <span>*</span></label>
                    <input type="password" name='oldpass' id='oldpass' {...register('oldPassword')}/>
                    <span className="error">{errors.oldPassword?.message}</span>
                </div>

                <div className='form-group'>
                    <label htmlFor='newpass'>New Password <span>*</span></label>
                    <input
                        type="password"
                        name="newPassword" // Changed name from 'newpass' to 'newPassword' to match the register validation object
                        id="newpass"
                        {...register('newPassword', {
                            required: "New password is required",
                            minLength: {
                                value: 8,
                                message: "Password must be at least 8 characters",
                            },
                            validate: {
                                containsUpperCharacter: (value) => {
                                    let reg = /(?=.*?[A-Z])/;
                                    return (
                                        value.match(reg) !== null ||
                                        "Password must contain an uppercase letter"
                                    );
                                },
                                containsLowerCharacter: (value) => {
                                    let reg = /(?=.*?[a-z])/;
                                    return (
                                        value.match(reg) !== null ||
                                        "Password must contain a lowercase letter"
                                    );
                                },
                                containsSpecialCharacter: (value) => {
                                    let reg = /(?=.*?[#?!@$%^&*-])/;
                                    return (
                                        value.match(reg) !== null ||
                                        "Password must contain a special character"
                                    );
                                },
                                containsNumber: (value) => {
                                    let reg = /(?=.*?[0-9])/;
                                    return value.match(reg) !== null || "Password must contain a number";
                                },
                            },
                            maxLength: {
                                value: 20,
                                message: "Password should not be longer than 20 characters",
                            },
                        })}
                    />
                    <span className="error">{errors.newPassword?.message}</span>
                </div>

                <input type="submit" className='mainbutton1' value="Change Password"/>
            </form>
            <DevTool control={control}/>
        </div>
    )
}

export default ChangePassword