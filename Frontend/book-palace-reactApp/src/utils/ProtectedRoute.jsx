import {React,useContext} from 'react'
import { UserContext } from '../context/UserProvider'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ProtectedRoute = ({children}) => {
    const {user,loading}=useContext(UserContext);
    const navigate=useNavigate();

    if(loading){
        return <h2>Loading...</h2>;
    }

  if(!user){
    toast.error("Please Login/Signup First!")
    navigate("/user/login");
}

  return children;
}

export default ProtectedRoute
