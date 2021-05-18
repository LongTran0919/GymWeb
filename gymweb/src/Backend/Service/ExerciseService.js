/* eslint-disable import/no-anonymous-default-export */
const axios = require('axios');

export default {
        AddExercise:(exercise)=>{
                return   axios
                .post('http://localhost:5000/exercise/add',exercise,{Headers: {
                          'Content-Type': 'application/json',
                        }}).then(res=>{
                  if(res.status!==401)return res.data;
                else return {"fail":"true"}
            })
        }

}