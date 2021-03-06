import React,{useContext} from 'react';
import validate from './validateInfoLogin';
import '../Form.css';
import useForm from './useForm';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../../Backend/Context/AuthContext';
const FormLogin = ({ submitFormLogin }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitFormLogin,
    validate
  );
  const {isAuthenticated,user,setisAuthenticated,setUser} = useContext(AuthContext);
    console.log("login "+isAuthenticated)
  return (
    !isAuthenticated?
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h3 className="text-white">
            Sign in
        </h3>
        <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your username'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          Log in
        </button>
      </form>
    </div>
    : window.location="/profile"
  );
};

export default FormLogin;