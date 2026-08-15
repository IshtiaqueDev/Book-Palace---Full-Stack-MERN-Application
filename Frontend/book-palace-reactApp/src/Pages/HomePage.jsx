import React, { useEffect,useState } from 'react'
import Card from '../components/Card'
import axios from "axios"
import SortBy from '../components/SortBy';
import { Outlet, useSearchParams } from 'react-router-dom';

const HomePage = () => {
  const [books,setBooks]=useState([]);
  const [searchParams,setSearchParams]=useSearchParams();
  console.log(searchParams.get("category"));

useEffect(()=>{
  getBooks();
  console.log(books);
},[])


useEffect(() => {
    console.log("Updated books:", books);
}, [books]);

async function getBooks(){
  let response=await axios.get("http://localhost:5000/books");
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
    <div className="row g-3">
    <div className="col-md-12 d-flex justify-content-between">
        <h4>All Books</h4>
        <SortBy/>
    </div>
  {filteredBooks.map((book, index) => (
    <div key={index} className="col-6 col-lg-3">
      <Card book={book}/>
    </div>
  ))}
    </div>
    </div>
    <Outlet/>
    </>
  )
}

export default HomePage