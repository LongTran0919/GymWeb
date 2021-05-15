/* eslint-disable import/no-anonymous-default-export */
// eslint-disable-next-line import/no-anonymous-default-export
const axios = require('axios');
export default {
    login: user=>{
        return   axios
            .post('http://localhost:5000/user/login',user,{ withCredentials: true },{Headers: {
                      'Content-Type': 'application/json',
                    }}).then(res=>{
              if(res.status!==401)return res.data;
            else return {isAuthenticated :false,user:{username:'',role:''}}
        })
    },
    register: user=>{
        return  fetch('http://localhost:5000/user/register',{
                method:"post",
                body:JSON.stringify(user),
                headers:{
                    "Content-type":"application/json"
                }
        }).then(res=>res.json()).then(data=>data)
    },
    logout: () =>{
        return   axios
        .get('http://localhost:5000/user/logout',{ withCredentials: true },{Headers: {
                  'Content-Type': 'application/json',
                }}).then(res=> { return {isAuthenticated :false,user:{username:'',role:''}}})
    },
    isAuthenticated:()  =>{
        return  axios
        .get('http://localhost:5000/user/authenticated',{ withCredentials: true },{Headers: {
                  'Content-Type': 'application/json',
                }}).then(res=>{
          if(res.status!==401)return res.data;
        else return {isAuthenticated :false,user:{username:'',role:''}}
    }).catch( error =>{
        console.log(error)
        return {isAuthenticated :false,user:{username:'',role:''}}
    }

    )
    },


}