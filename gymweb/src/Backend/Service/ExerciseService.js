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
        },
        GetAll:()=>{
                return   axios
                .get('http://localhost:5000/exercise/all',{Headers: {
                          'Content-Type': 'application/json',
                        }}).then(res=>{
                  if(res.status!==401)return res.data;
                else return {"fail":"true"}
            })
        },
        DeleteId:(id)=>{
          return   axios
          .post('http://localhost:5000/exercise/delete',id,{Headers: {
                    'Content-Type': 'application/json',
                  }}).then(res=>{
            if(res.status!==401)return res.data;
          else return {"fail":"true"}
      })
  },

}