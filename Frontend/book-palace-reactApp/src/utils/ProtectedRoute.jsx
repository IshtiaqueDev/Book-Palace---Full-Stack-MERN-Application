import {React,useContext , useEffect} from 'react'
import { UserContext } from '../context/UserProvider'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loader from "../components/Loader"

const ProtectedRoute = ({children}) => {
    const {user,loading}=useContext(UserContext);
    const navigate=useNavigate();

     useEffect(() => {
        if (!loading && !user) {
            toast.error("Please Login/Signup First!");
            navigate("/user/login", { replace: true });
        }
    }, [loading, user, navigate]);

    if(loading){
        return <Loader/>;
    }

  if(!user){
    return null;
}

  return children;
}

export default ProtectedRoute
