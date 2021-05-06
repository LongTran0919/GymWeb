import React,{createContext,useState} from 'react';
const axios = require('axios');
export const DataContext=createContext();
 
 
const DataProvider=(props)=>{  
    
    // var Data =       axios.get(`http://localhost:5000/exercise/all`,{ crossdomain: true }).then(  (result )=>{
        
    //         // Data=result.data
    //     //    console.log( result.data);
    //     return    result.data  ;
          
    //       }).catch((error)=>{
    //         console.log("Error",error);
    //       })
    //     //    console.log(Data)

    async function makeGetRequest() {

      let res = await axios.get('http://localhost:5000/exercise/all');
    return res.data;
      // console.log(data);
    }
    
    //makeGetRequest();
    
      

   
   
  
    
      const [products,setProducts]=useState([
        makeGetRequest()
       ])
    
    return(
        <DataContext.Provider value={[products,setProducts]}>
            {props.children}
        </DataContext.Provider>
    )
}
export default DataProvider;