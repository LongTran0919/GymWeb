
export default function validateInfo(values) {
    let error = {} ;
    if (!values.username) {
      error.username = 'Username required';
    }
    if (!values.password) {
      error.password = 'Password is required';
    }
    return error;
  }