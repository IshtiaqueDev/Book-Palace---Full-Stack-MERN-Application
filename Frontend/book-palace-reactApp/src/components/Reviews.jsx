import React, { useContext, useState } from 'react'
import axios from 'axios'
import {toast} from 'react-toastify'
import { UserContext } from '../context/UserProvider'
import { useNavigate } from 'react-router-dom'

const Reviews = ({id}) => {
  const initialState = {
    rating: 0,
    comment: ''
  }

  const navigate=useNavigate()
  const [validated, setValidation] = useState(false)
  const [reviewData, setReviewData] = useState(initialState)
  const {user}=useContext(UserContext);

  const changeInput = (e) => {
    setReviewData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    const form = e.currentTarget
    if (!form.checkValidity()) {
      setValidation(true)
      return
    }
    try{
      console.log(reviewData)
      if(!user){
        toast.error("Login Before Adding Review!");
        navigate("/user/login");
        return;
      }
      let response=await axios.post(`https://book-palace-full-stack-mern-application-production.up.railway.app/reviews/${id}/add`,reviewData ,{
        withCredentials:true
      })
      toast.success(response.data.message);
    setValidation(false)
    console.log(reviewData);
    setReviewData(initialState);
    }catch(err){
      if(!user){
      toast.error("Login Before Adding Review!");
      }else{
        toast.error(err);
      }}
  }

  return (
    <div className="container mb-3">
      <div className="row">
        <h4>Review:</h4>

        <div className="col">
          <form
            className={validated ? 'was-validated' : 'needs-validation'}
            noValidate
            onSubmit={handleSubmit}
          >
            <div className="mb-3 mt-3">
              <label htmlFor="rating">Rating:</label>
              <fieldset className="starability-slot">
                <input
              type="radio"
              id="no-rate"
              className="input-no-rate"
              defaultChecked
              name="rating"
              value="0"
              aria-label="No rating."
              onChange={changeInput}
              />
                
                <input
                  type="radio"
                  required
                  id="first-rate1"
                  name="rating"
                  value="1"
                  onChange={changeInput}
                />
                <label htmlFor="first-rate1" title="Terrible">
                  1 star
                </label>

                <input
                  type="radio"
                  id="first-rate2"
                  name="rating"
                  value="2"
                  onChange={changeInput}
                />
                <label htmlFor="first-rate2" title="Not good">
                  2 stars
                </label>

                <input
                  type="radio"
                  id="first-rate3"
                  name="rating"
                  value="3"
                  onChange={changeInput}
                />
                <label htmlFor="first-rate3" title="Average">
                  3 stars
                </label>

                <input
                  type="radio"
                  id="first-rate4"
                  name="rating"
                  value="4"
                  onChange={changeInput}
                />
                <label htmlFor="first-rate4" title="Very good">
                  4 stars
                </label>

                <input
                  type="radio"
                  id="first-rate5"
                  name="rating"
                  value="5"
                  onChange={changeInput}
                />
                <label htmlFor="first-rate5" title="Amazing">
                  5 stars
                </label>
              </fieldset>
            </div>

            <div className="mb-3">
              <label htmlFor="comment">Comment:</label>
              <textarea
                name="comment"
                id="comment"
                placeholder="Enter Description"
                required
                value={reviewData.comment}
                onChange={changeInput}
                className="form-control"
                style={{ resize: 'none' }}
              />
              <div className="invalid-feedback">
                Please enter a short description!
              </div>
            </div>

            <button type="submit" className="btn btn-dark">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Reviews
