import React, { useState } from 'react'

const Reviews = () => {
  const[validated,setValidation]=useState(false);

    return (
    <div className='container mb-3'>
    <div className="row">
        <h4>Review:</h4>
        <div className="col">
         <form  className={validated?"was-validated":"needs-validation"} noValidate>
            <div className="mb-3">
                <label htmlFor="rating">Rating:</label>
            </div>
            
            <div className="mb-3">
              <label htmlFor="description">Description</label>
              <textarea name="description" id="description" placeholder="Enter Description" required className="form-control"  style={{ resize: 'none' }}></textarea>
              <div className="invalid-feedback">
                Please enter a short description !
              </div>
            </div>
    
        <button type='submit' className='btn btn-dark'>Submit</button>
    
        </form>
        </div>
    </div>
    </div>
  )
}

export default Reviews
