import React, { createContext, useState, useContext } from 'react';
import axios from "axios"
import { server } from '../main';

import {Toaster} from "react-hot-toast";
export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {

  const [user, setUser] = useState([]);
  const [isAuth,setAuth]=useState(false);
  const[btnLoading,setBtnLoading]=useState(false);
async function loginUser(email,passwrod,navigate){
    setBtnLoading(true)
    try{
        const{data}=await axios(``,{email,password})
        toast.success(data.message)
        localStorage.setItem("token",data.token);
        setUser(data.user)
        setIsAuth(true)
        setBtnLoading(false);
        navigate("/")
        setIsAuth(false)
        toast.error(error.response.data.message)
    }catch(error){
        console.log(error);
    }
}
  return (
    <UserContext.Provider value={{ user, setUser ,setIsAuth,isAuth,loginUser,btnLoading}}>
      {children}
      <Toaster/>
    </UserContext.Provider>
  );
};

export const useUserData = () => {
  return useContext(UserContext);
};