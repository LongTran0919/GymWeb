
export default function validateInfo(values) {
    let error = {} ;
    if (!values.username) {
      error.username = 'Username required';
    }else if(values.username.length > 16)
    {
      error.username='Username needs to be 16 characters or less'
    }
    if (!values.password) {
      error.password = 'Password is required';
    }else if(values.password.length < 6 ){
      error.password = 'Password needs to be 6 characters or more';
    }
    return error;
  }