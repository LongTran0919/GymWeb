/* eslint-disable import/no-anonymous-default-export */
const axios = require('axios');

export default {
        AddExercise:(exercise)=>{
                return   axios
                .post('http://localhost:5000/exercise/add',exercise,{ withCredentials: true },{Headers: {
                          'Content-Type': 'application/json',
                        }}).then(res=>{
                  if(res.status!==401)return res.data;
                else return {"fail":"true"}
            }).catch(error=> console.log(error))
        },
        GetAll:()=>{
                return   axios
                .get('http://localhost:5000/exercise/all',{Headers: {
                          'Content-Type': 'application/json',
                        }}).then(res=>{
                  if(res.status!==401)return res.data;
                else return {"fail":"true"}
            }).catch(error=> console.log(error))
        },
        DeleteId:(id)=>{
          return   axios
          .post('http://localhost:5000/exercise/delete',{id:id},{ withCredentials: true },{Headers: {
                    'Content-Type': 'application/json',
                  }}).then(res=>{
            if(res.status!==401)return res;
          else return {"fail":"true"}
      }).catch(error=> console.log(error))
  }, 
    Update:(data)=>{
    return   axios
    .post('http://localhost:5000/exercise/update',{data:data},{ withCredentials: true },{Headers: {
              'Content-Type': 'application/json',
            }}).then(res=>{
      if(res.status!==401)return res.data;
    else return {"fail":"true"}
}).catch(error=> console.log(error))
},  Comment:(data)=>{
  return   axios
  .post('http://localhost:5000/exercise/comment',{id:data.id,comment:data.comment},{ withCredentials: true },{Headers: {
            'Content-Type': 'application/json',
          }}).then(res=>{
    if(res.status===200)return res.data;
  else return {"fail":"true"}
}).catch(error=> console.log(error))
},
 

}