import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const BookInfo = () => {
  const[relatedBooks,setRelatedBooks]=useState([]);
  const {id}=useParams();
  const[book,setBookInfo]=useState(null);
  const navigate=useNavigate();

  useEffect(()=>{
    findBook();
  },[]);

let relatedBooksFind=async()=>{
    try{
    let response=await axios.get(`http://localhost:5000/books/relatedbook/${book.category}`);
    setRelatedBooks(response.data.relatedBooks);
  }catch(err){  
    console.log(err);
  }
}

useEffect(()=>{
  relatedBooksFind();
},[book])


  const findBook=async()=>{
    try{
        let response=await axios.get(`http://localhost:5000/books/${id}`);
        await setBookInfo(response.data)
    }catch(err){
        console.log(err); 
    }
  }


  let handleDelete=async()=>{
    try{
      let response=await axios.delete(`http://localhost:5000/books/delete/${book._id}`,{
        withCredentials:true
      });
      toast.success(response.data.message);
      navigate("/books");
    }catch(err){
    toast.error(err);
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

            
          <div className="mb-3">
            <h5 className="text-muted mb-1">Total Reviews: <span className='fs-5 mb-0'>{book.reviews.length}</span></h5>
          </div>


          <div className="mb-3">
            <h5 className="text-muted mb-1">Category:</h5>
            <p className="fs-5 mb-0">{book.category}</p>
          </div>
          
          <div className="mb-4">
            <h5 className="text-muted mb-2">Description</h5>
            <p className="text-secondary fs-5">
              {book.description}
            </p>
          </div>

            {/* <div className="mb-3">
            <h5 className="text-muted mb-1">Posted By:</h5>
            <p className="fs-5 mb-0">{book.postedBy.username}</p>
          </div> */}

          <button className="btn btn-dark px-4">
            Edit
          </button>
          &nbsp;&nbsp;
          <button className="btn btn-danger px-4" onClick={handleDelete}>
            Delete
          </button>

        </div>
      </div>

    </div>
  )}

   <div className="m-3">
  <h3>Related Books:</h3>

  <div className="d-flex gap-3 overflow-auto">
    {relatedBooks &&
      relatedBooks.map((el) => (
        <a
          href={`/books/${el._id}`}
          key={el._id}
          className="text-decoration-none text-dark flex-shrink-0"
        >
          <div className="card" style={{ width: "200px" }}>
            <img
              src={el.imageUrl}
              className="card-img-top"
              alt={el.title}
              style={{ height: "250px", objectFit: "cover" }}
            />
            <div className="card-body">
              <h5   className="card-title text-truncate"
              style={{ maxWidth: "100%" }}>{el.title}</h5>
            </div>
          </div>
        </a>
      ))}
  </div>
</div>
</div>
    </>
  )
}

export default BookInfo
