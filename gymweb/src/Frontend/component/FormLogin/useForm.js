import { useState, useEffect } from 'react';
 
const axios = require('axios');


const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: '',
    password: ''
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

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        console.log(values)
        const {username,password}=values;
        console.log(username);
       axios
       .post('http://localhost:5000/user/login', {
         "username":username,
         "password":password
       },{Headers: {
         'Content-Type': 'application/json',
          "Access-Control-Allow-Origin": "*"
       }})
       .then(res => {
  
         console.log(res)
         console.log(res.cookies)
         if(res.status==200){
          // setCookie('name', newName, { path: '/' });
          window.location='/home';
  
         }
       })
       .catch(error => {
         console.error(error);
         setIsSubmitting(false);
         alert('Tài khoản hoặc mật khẩu chưa đúng');
      })
    }
        
    },
    [errors,values]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;