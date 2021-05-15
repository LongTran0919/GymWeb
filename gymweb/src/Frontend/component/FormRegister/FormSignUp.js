import React from 'react';
import validate from './validateInfo';
import useFormRe from './useFormRe';
import '../Form.css';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useFormRe(
    submitForm,
    validate
  );



  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h3 className="text-dark">
          Register
        </h3>
        <div className='form-inputs'>
          <div className='error_text'>
            <label className='form-label'>Username</label>
            {errors.username && <p>{errors.username}</p>}
          </div>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your username'
            value={values.username}
            onChange={handleChange}
          />

        </div>
        <div className='form-inputs'>
          <div className='error_text'>
            <label className='form-label'>Password</label>
            {errors.password && <p>{errors.password}</p>}
          </div>
          
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          
        </div>
        <div className='form-inputs'>
          <div className='error_text'>
            <label className='form-label'>Confirm Password</label>
            {errors.password2 && <p>{errors.password2}</p>}
          </div>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Confirm your password'
            value={values.password2}
            onChange={handleChange}
          />
        </div>
        <div className='form-inputs'>
          <div className='error_text'>
            <label className='form-label'>Email</label>
            {errors.email && <p>{errors.email}</p>}
          </div>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          
        </div>
        <button className='form-input-btn' type='submit'>
          Sign up
        </button>
        <span className='form-input-login'>
          Already have an account? Login <a href='/signin'>here</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;