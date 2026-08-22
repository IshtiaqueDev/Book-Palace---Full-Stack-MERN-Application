import {React,useContext} from 'react'
import { UserContext } from '../context/UserProvider'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loader from "../components/Loader"

const ProtectedRoute = ({children}) => {
    const {user,loading}=useContext(UserContext);
    const navigate=useNavigate();

    if(loading){
        return <Loader/>;
    }

  if(!user){
    toast.error("Please Login/Signup First!")
    navigate("/user/login");
}

  return children;
}

export default ProtectedRoute
