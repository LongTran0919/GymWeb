/* eslint-disable import/no-anonymous-default-export */
const axios = require('axios');

export default {
        Bmi:(Bmi)=>{
                return   axios
                .post('http://localhost:5000/user/bmi',{Bmi:Bmi},{ withCredentials: true },{Headers: {
                          'Content-Type': 'application/json',
                        }}).then(res=>{
                  if(res.status!==401)return res.data;
                else return {"fail":"true"}
            })
        },
        info:(Bmi)=>{
            return   axios
            .post('http://localhost:5000/user/bmi',{Bmi:Bmi},{ withCredentials: true },{Headers: {
                      'Content-Type': 'application/json',
                    }}).then(res=>{
              if(res.status!==401)return res.data;
            else return {"fail":"true"}
        })
    }

}