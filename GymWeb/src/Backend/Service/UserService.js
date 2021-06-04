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
        info:()=>{
            return   axios
            .get('http://localhost:5000/user/info',{ withCredentials: true },{Headers: {
                      'Content-Type': 'application/json',
                    }}).then(res=>{
              if(res.status!==401)return res.data;
            else return {"fail":"true"}
        })
    },
    Plan:(plan)=>{
      return   axios
      .post('http://localhost:5000/user/plan',{plan:plan},{ withCredentials: true },{Headers: {
                'Content-Type': 'application/json',
              }}).then(res=>{
        if(res.status!==401)return res.data;
      else return {"fail":"true"}
  })
}

}