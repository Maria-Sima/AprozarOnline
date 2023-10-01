import './AccountSettings.scss'
import {useForm} from "react-hook-form";
import {DevTool} from "@hookform/devtools";
import { useAxiosPost} from "../../../Api/Axios/useFetch.js";
import {useSelector} from "react-redux";

const AccountSettings = () => {
    const {register, handleSubmit, control, formState: {errors}, watch} = useForm({
        mode: 'onChange'
    });
  const {post: update, response}=useAxiosPost();
    const customerId = useSelector(state => state.auth.user_id);

    const updateUser = (data) => {
        update(`/user/${customerId}`, data, "PUT");
    };
    return (<div className='accountsettings'>
            <h1 className='mainhead1'>Personal Information</h1>

            <form className='form' onSubmit={handleSubmit(updateUser)}>
                <div className='form-group'>
                    <label htmlFor='name'>First Name <span>*</span></label>
                    <input type='text' name='fname' id='fname'  {...register('firstName')} />
                </div>

                <div className='form-group'>
                    <label htmlFor='phone'>Last Name <span>*</span></label>
                    <input type='text' name='lname' id='lname' {...register('firstName')}{...register('lastName')}/>
                </div>

                <div className='form-group'>
                    <label htmlFor='email'>Email <span>*</span></label>
                    <input type='email' name='email' id='email' {...register('email')}/>
                </div>
                <div className='form-group'>
                    <label htmlFor='address'>Address <span>*</span></label>
                    <input type='address' name='address' id='address' {...register('address')}/>
                </div>
                <input type="submit" className='mainbutton1' value="Save Changes"/>
            </form>
            <DevTool control={control}/>

        </div>)
}

export default AccountSettings