    import React, { useState } from 'react'
    import axios from "axios";
    import { toast } from 'react-toastify'
    import { useNavigate } from "react-router-dom"

    const SignUp = () => {
    let initialState={ username: "",email:"", password: "" }
        let [userData, setUserData] = useState(initialState)
        let [validated, setValidation] = useState(false)
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
    
            console.log(userData);
            try{
            let response=await axios.post("http://localhost:5000/user/signup",userData);
            toast.success(response.data.message);
            navigate("/books");
        }catch(err){    
        toast.error(err.response?.data?.message || err.message);
        }
        setUserData(initialState);
        setValidation((false))
        
        }
    
    return (
        <div className='text-center mt-5'>
                <h3>Signup Page</h3>
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
                                        name='username'
                                        required
                                        value={userData.username}
                                        onChange={changeInput}
                                    />
                                </div>

                                <div className="mb-3 text-start">
                                    <label htmlFor="email" className="form-label">Email:</label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="Enter your Email"
                                        className="form-control"
                                        name='email'
                                        required
                                        value={userData.email}
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
                                        name='password'
                                        required
                                        value={userData.password}
                                        onChange={changeInput}
                                    />
                                </div>
                                <p>Already signed in?  <a href="/user/login">Login Here</a></p>
                                <button type="submit" className='btn btn-dark w-100'>SignUp</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    )
    }

    export default SignUp
