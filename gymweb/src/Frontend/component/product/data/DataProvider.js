import React,{createContext,useState} from 'react';
const axios = require('axios');
export const DataContext=createContext();
 
 
const DataProvider=(props)=>{  
    
 

    async function makeGetRequest() {

      let res = await axios.get('http://localhost:5000/exercise/all');
    return res.data;
    }
    


    
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