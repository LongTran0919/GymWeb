import { useState, useEffect } from 'react';
import {toast} from 'react-toastify';
const axios = require('axios');


const useFormRe = (callback, validate) => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    password2: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };
  
  const handleSubmit = e => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };
  const onsubmit = e=>{
    setIsSubmitting(true);
  }
  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        console.log(values)
        const {username,password,email}=values;
        console.log(username);
        
       axios
       .post('http://localhost:5000/user/register', {
         "username":username,
         "password":password,
         "email":email
       },{Headers: {
         'Content-Type': 'application/json',
          "Access-Control-Allow-Origin": "*"
       }})
       .then(res => {
         console.log(res)
         console.log(res.cookies)
         if(res.status==200){
          // setCookie('name', newName, { path: '/' });
          toast.configure();
          toast.success('Đăng ký thành công' ,{position:toast.POSITION.BOTTOM_LEFT});
          window.location='/signin';
  
         }
         
       })
       .catch(error => {
        console.error(error);
        setIsSubmitting(false);
        toast.configure();
        toast.error('Đăng ký thật bại' ,{position:toast.POSITION.BOTTOM_LEFT});
        
      })
      }
    },
    [errors,values]
   );

  return { handleChange, handleSubmit, values, errors };
};

export default useFormRe;