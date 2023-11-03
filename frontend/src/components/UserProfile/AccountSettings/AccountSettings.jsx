import { DevTool } from '@hookform/devtools';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useUpdateUserMutation } from '../../../reducers/apiSlice.js';
import './AccountSettings.scss';

const AccountSettings = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm({
    mode: 'onChange',
  });
  const customerId = useSelector((state) => state.auth.user_id);
  const [updateUser] = useUpdateUserMutation();
  const handleUpdateUser = async (data) => {
    await updateUser(data);
  };
  return (
    <div className="accountsettings">
      <h1 className="mainhead1">Personal Information</h1>

      <form className="form" onSubmit={handleSubmit(handleUpdateUser)}>
        <div className="form-group">
          <label htmlFor="name">
            First Name <span>*</span>
          </label>
          <input type="text" name="fname" id="fname" {...register('firstName')} />
        </div>

        <div className="form-group">
          <label htmlFor="phone">
            Last Name <span>*</span>
          </label>
          <input type="text" name="lname" id="lname" {...register('firstName')} {...register('lastName')} />
        </div>

        <div className="form-group">
          <label htmlFor="email">
            Email <span>*</span>
          </label>
          <input type="email" name="email" id="email" {...register('email')} />
        </div>
        <div className="form-group">
          <label htmlFor="address">
            Address <span>*</span>
          </label>
          <input type="address" name="address" id="address" {...register('address')} />
        </div>
        <input type="submit" className="mainbutton1" value="Save Changes" />
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default AccountSettings;
