import React, { useState } from 'react'

const SignUp = () => {
    let[validated,setValidation]=useState(false);
  return (
       <div className='text-center mt-5'>
            <h3>Signup Page</h3>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-5 col-lg-4">
                        <form className={validated ? 'was-validated' : 'needs-validation'} noValidate>
                            <div className="mb-3 text-start">
                                <label htmlFor="username" className="form-label">Username</label>
                                <input
                                    type="text"
                                    id="username"
                                    placeholder="Enter your username"
                                    className="form-control"
                                    name='username'
                                    required
                                />
                            </div>

                             <div className="mb-3 text-start">
                                <label htmlFor="username" className="form-label">Email:</label>
                                <input
                                    type="text"
                                    id="username"
                                    placeholder="Enter your Email"
                                    className="form-control"
                                    name='email'
                                    required
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
                                />
                            </div>
                            <p>Already signed in?  <a href="/login">Login Here</a></p>
                            <button type="submit" className='btn btn-dark w-100'>SignUp</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default SignUp
