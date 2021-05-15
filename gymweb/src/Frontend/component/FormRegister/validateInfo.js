export default function validateInfo(values) {
    let errors = {} ;
    if ((!/^[a-zA-Z0-9]*$/.test(values.username))||!values.username) {
      errors.username = 'Username required';
    }else if(values.username.length > 16)
    {
      errors.username='Username needs to be 16 characters or less'
    }
    if (!values.email) {
      errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    }else if(values.password.length < 6 ){
      errors.password = 'Password needs to be 6 characters or more';
    }
  
    if (!values.password2) {
      errors.password2 = 'Password is required';
    } else if (values.password2 !== values.password) {
      errors.password2 = 'Passwords do not match';
    }
    return errors;
  }