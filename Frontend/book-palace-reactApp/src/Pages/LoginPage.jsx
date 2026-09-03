import React, { useContext, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'

const LoginPage = () => {
    let initialState={ username: "", password: "" }
    let [userData, setUserData] = useState(initialState)
    let [validated, setValidation] = useState(false)
    const {setUser}=useContext(UserContext);

    const navigate=useNavigate();
    const changeInput=(e)=>{
    setUserData((prevData)=>(
      {
        ...prevData,[e.target.name]:e.target.value
      }
    ))
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();
    const form=e.currentTarget;
     if (!form.checkValidity()) {
            setValidation(true);
            return;
        }   
    try{
    let response=await axios.post("hhttps://book-palace-full-stack-mern-application-production-1d9c.up.railway.app/user/login",userData,{
        withCredentials:true
    });
    setUserData(initialState);
    setValidation((false));
    localStorage.setItem("auth-change", Date.now());
    toast.success(response.data.message);
    console.log(response.data.user)
    setUser(response.data.user);
    navigate("/books");
    }catch(err){ 
        toast.error(err.response?.data?.message || err.message);   
    }
  }


    return (
        <div className='text-center mt-5'>
            <h3>Login Page</h3>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-5 col-lg-4">
                        <form className={validated ? 'was-validated' : 'needs-validation'} onSubmit={handleSubmit} noValidate>
                            <div className="mb-3 text-start">
                                <label htmlFor="username" className="form-label">Username</label>
                                <input
                                    type="text"
                                    id="username"
                                    placeholder="Enter your username"
                                    className="form-control"
                                    required
                                    name='username'
                                    value={userData.username}
                                    onChange={changeInput}
                            />
                            </div>

                            <div className="mb-3 text-start">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="Enter your password"
                                    className="form-control"
                                    required
                                    name="password"
                                    value={userData.password}
                                    onChange={changeInput}
                                />
                            </div>
                            <p>Not signed in? <a href="/user/signup">Signup Here</a></p>
                            <button type="submit" className='btn btn-dark w-100'>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
