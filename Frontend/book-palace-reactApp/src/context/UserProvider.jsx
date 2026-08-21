import { createContext, useEffect, useState } from "react";
export const UserContext = createContext();
import axios from "axios"

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const getUser=async()=>{
        try{
        let response=await axios.get("http://localhost:5000/user/me",{
            withCredentials:true
        })
        console.log(response.data.user);
        setUser(response.data.user);
        }catch(err){
            console.log(err.message);
        }
    }
    useEffect(()=>{
        getUser()
    },[]);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};