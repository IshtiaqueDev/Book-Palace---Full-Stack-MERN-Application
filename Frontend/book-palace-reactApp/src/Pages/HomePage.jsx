import React, { useEffect,useState } from 'react'
import Card from '../components/Card'
import axios from "axios"
import Category from '../components/Category';
import { Outlet, useSearchParams } from 'react-router-dom';

const HomePage = () => {
  const [books,setBooks]=useState([]);
  const [searchParams,setSearchParams]=useSearchParams();

useEffect(()=>{
  getBooks();
},[])


useEffect(() => {
}, [books]);

async function getBooks(){
  let response=await axios.get("https://book-palace-full-stack-mern-application-production-1d9c.up.railway.app/books");
  setBooks(response.data.allBooks);
} 

const category = searchParams.get("category");


const filteredBooks = category
  ? books.filter((book) =>
      book.category.toLowerCase().includes(category.toLowerCase())
    )
  : books;

  
 return (
  <>
    <div className="container py-4">

      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="fw-bold mb-0">All Books</h4>
        <Category />
      </div>

      {/* Books */}
      <div className="row g-4">
        {filteredBooks.map((book, index) => (
          <div key={index} className="col-6 col-md-4 col-lg-3">
            <Card book={book} />
          </div>
        ))}
      </div>

    </div>

    <Outlet />
  </> 
  )
}

export default HomePage