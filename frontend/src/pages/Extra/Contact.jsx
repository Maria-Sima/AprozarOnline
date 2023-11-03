import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import SingleBanner from '../../components/Banners/SingleBanner.jsx';
import Footer1 from '../../components/Footer/Footer1.jsx';
import Footer2 from '../../components/Footer/Footer2.jsx';
import { useSendFeedBackEmailMutation } from '../../reducers/apiSlice.js';
import './Extrapages.scss';

const Contact = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm({
    mode: 'onChange',
  });
  const [sendFeedBackEmail, { isSuccess }] = useSendFeedBackEmailMutation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const submitFeedBackForm = async (data) => {
    await sendFeedBackEmail(data);
  };
  return (
    <div className="extrapage">
      <SingleBanner
        bannerimage="https://images.unsplash.com/photo-1495480137269-ff29bd0a695c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
        heading="Contact Us"
      />
      <div className="pgleft pgcommon">
        <img
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          alt="noimg"
        />

        <div>
          <h1>Our Story</h1>
          <p>
            We understand the importance of providing high-quality products to our customers. That's why we carefully
            select our suppliers and perform rigorous quality checks to ensure the freshness and purity of our products.
          </p>
        </div>
      </div>
      <div className="pgright pgcommon">
        <img
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          alt="noimg"
        />

        <div>
          <h1>Who are we</h1>
          <p>
            Welcome to our Natural Food Online Store!We are passionate about providing you with the finest selection of
            natural products sourced directly from local producers. We believe in the power of nature and the importance
            of supporting local communities.
          </p>
        </div>
      </div>
      <form className="extrapageform" onSubmit={handleSubmit(submitFeedBackForm)}>
        <h1 className="formheading">Get in Touch</h1>
        <div className="fromgroup">
          <label htmlFor="">Name</label>
          <input type="text" {...register('name', { required: 'A Name is required' })} />
          <span className="error">{errors.firstName?.message}</span>
        </div>

        <div className="fromgroup">
          <label htmlFor="">Email</label>
          <input
            type="email"
            {...register('email', {
              pattern: {
                value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: 'Please enter a valid email',
              },
              required: 'Email is required',
            })}
          />
        </div>

        <div className="fromgroup">
          <label htmlFor="">Message</label>
          <textarea name="" id="" cols="30" rows="10" {...register('text')}></textarea>
        </div>
        <button>Submit</button>
      </form>
      <Footer1 />
      <Footer2 />
      Contact
    </div>
  );
};

export default Contact;
