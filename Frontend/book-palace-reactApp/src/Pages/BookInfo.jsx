import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const BookInfo = () => {
  const {id}=useParams();
  const[book,setBookInfo]=useState(null);
  useEffect(()=>{
    findBook();
  },[]);


  const findBook=async()=>{
    try{
        let response=await axios.get(`http://localhost:5000/books/${id}`);
        await setBookInfo(response.data)
    }catch(err){
        console.log(err); 
    }
  }
    return(
    <>
    <div className="container py-5">
  {book && (
    <div className="row align-items-center g-5">

      {/* Book Image */}
      <div className="col-md-5 text-center">
        <div className="p-3">
          <img
            src={book.imageUrl}
            alt={book.title}
            className="img-fluid rounded shadow"
            style={{
              maxHeight: "500px",
              width: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      </div>

      {/* Book Information */}
      <div className="col-md-7">
        <div className="p-4">

          <h1 className="fw-bold mb-4">
            {book.title}
          </h1>

          <div className="mb-3">
            <h5 className="text-muted mb-1">Author:</h5>
            <p className="fs-5 mb-0">{book.author}</p>
          </div>

          <hr />

          <div className="mb-4">
            <h5 className="text-muted mb-2">Description</h5>
            <p className="text-secondary fs-5">
              {book.description}
            </p>
          </div>

          <button className="btn btn-dark px-4">
            Edit
          </button>
          &nbsp;&nbsp;
          <button className="btn btn-danger px-4">
            Delete
          </button>

        </div>
      </div>

    </div>
  )}
</div>
    </>
  )
}

export default BookInfo
