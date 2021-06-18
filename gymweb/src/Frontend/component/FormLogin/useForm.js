import { useState, useEffect ,useContext} from 'react';
import {toast} from 'react-toastify';
import {AuthContext} from '../../../Backend/Context/AuthContext';
import Authservice from '../../../Backend/Service/AuthService';




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
         
          console.log(data.Cookies);
          authContext.setUser(user);
          authContext.setisAuthenticated(isAuthenticated);
          
          window.location='/';
        }else{   
          setIsSubmitting(false);
          console.log("fail")
          console.log(data)
        }
     
      }

    )
  }
 

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;