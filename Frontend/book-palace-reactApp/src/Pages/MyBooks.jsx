import React, { useContext, useState ,useEffect} from 'react'
import { toast } from 'react-toastify';
import axios from 'axios';
import Card from '../components/Card';

const MyBooks=()=>{
    const[books,setBooks]=useState([]);

    const getMyBooks=async()=>{
        try{
            const response=await axios.get("https://book-palace-full-stack-mern-application-production.up.railway.app/books/mybooks",{
                withCredentials:true
            });
           setBooks(response.data.myBooks);
        }catch(err){
            toast.error("Something went wrong!")
        }
    }

    useEffect(()=>{
        getMyBooks();
    },[])
    return(
        <>
        {
            books?(
      <div className="container py-4">
        <h4 className="fw-bold mb-0">-Your Added Books</h4>
    <div className="row g-4 mt-2">
        {books.map((book, index) => (
          <div key={index} className="col-6 col-md-4 col-lg-3">
            <Card book={book} />
          </div>
        ))}
      </div>
    </div>
    )
            :
            <h2 className='mt-5 text-center'>No any book is added</h2>
        }
        </>
    )
}

export default MyBooks;
