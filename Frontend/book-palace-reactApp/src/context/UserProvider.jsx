import { createContext, useEffect, useState } from "react";
export const UserContext = createContext();
import axios from "axios"

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const getUser=async()=>{
        try{
        let response=await axios.get("http://localhost:5000/user/me",{
            withCredentials:true
        })
        setUser(response.data.user);
        }catch(err){
            console.log(err.message);
        }finally{
            setLoading(false);
        }
    }


    useEffect(()=>{
        getUser()
    },[]);



    useEffect(() => {
    const handleLogout = (event) => {
        if (event.key === "logout") {
            setUser(null);
        }
    };
    window.addEventListener("storage", handleLogout);
    return () => {
        window.removeEventListener("storage", handleLogout);
    };
}, []);



useEffect(() => {
    const handleAuthChange = () => {
    axios.get("http://localhost:5000/user/me", {
        withCredentials: tru
        })
        .then((response) => {
            setUser(response.data.user);
        })
        .catch(() => {
            setUser(null);
        });
    };
    window.addEventListener("storage", handleAuthChange);
    return () => {
    window.removeEventListener("storage", handleAuthChange);
    };
}, []);


    return (
        <UserContext.Provider value={{ user, setUser ,loading }}>
            {children}
        </UserContext.Provider>
    );
};