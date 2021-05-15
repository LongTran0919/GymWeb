import { useState, useEffect ,useContext} from 'react';
import {toast} from 'react-toastify';
import {AuthContext} from '../../../Backend/Context/AuthContext';
import Authservice from '../../../Backend/Service/AuthService';

const axios = require('axios');


const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: '',
    password: '',
    
  });
 
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const authContext   = useContext(AuthContext);
  const handleChange = e => {
    const { name, value } = e.target;
    
    setValues({
      ...values,
      [name]: value
    });

    console.log(values)
  };
  const onChange = e=>{
    e.preventDefault();
    setValues({...values,[e.target.name]:e.target.value});
    console.log(values)
  }
  // const handleSubmit = e => {
  //   e.preventDefault();
  //   setErrors(validate(values));
  //   setIsSubmitting(true);
  // };
  const handleSubmit = e=>{
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);

    Authservice.login(values).then(
      data=>{console.log(data)
        const {isAuthenticated,user}=data;
        if(isAuthenticated){
          console.log("ok")
          console.log(data.Cookies);
          authContext.setUser(user);
          authContext.setisAuthenticated(isAuthenticated);
          
        
        }else{   
          setIsSubmitting(false);
          console.log("fail")
          console.log(data)
        }
     
      }

    )
  }
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
          'Content-Type': 'application/json'
        }})
        .then(res => {
          console.log(res)
        console.log(res.cookies)
          if(res.status==200){
           // setCookie('name', newName, { path: '/' });
           // toast.configure();
           // toast.success('Đăng nhập thành công' ,{position:toast.POSITION.BOTTOM_LEFT});
           window.location='/';
  
          }
        })
        .catch(error => {
          console.error(error);
          setIsSubmitting(false);
           toast.configure();
          toast.error('Đăng nhập thất bại' ,{position:toast.POSITION.BOTTOM_LEFT});
       })
     }
        
    },
    [errors,values]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;