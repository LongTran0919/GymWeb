/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-unused-vars */
 
import React ,{createContext,useState,useEffect,useRef} from 'react' ;
import '../../App.css';
import Authservice from '../Service/AuthService';


export const AuthContext = createContext();

export default ({children})=>{
    const [user,setUser]=useState(null);
    const [isAuthenticated,setisAuthenticated]=useState(false);
    const [isLoaded,setIsloaded]=useState(false);
    
    useEffect(()=>{
       
        setIsloaded(true);
        Authservice.isAuthenticated().then(data=>{
            setUser(data.user);
            setisAuthenticated(data.isAuthenticated);
           
        })
        const timer = setTimeout(() => {
            setIsloaded(false);
          }, 1100);
        return () => clearTimeout(timer);
    },[])

    return (
        <div>
        {isLoaded?  <div class="loadingscreen">
        <div class="progress-9"></div></div>:
        <AuthContext.Provider value={{user,setUser,isAuthenticated,setisAuthenticated}}>
            {children}
        </AuthContext.Provider>
        }
        </div>
    )
}