import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import BookForm from './BookForm'
import axios from 'axios';

const EditPage = () => {
    const[book,setBookData]=useState('');
    const {id}=useParams();

    let findBook=async()=>{
        try{
        let response=await axios.get(`https://book-palace-full-stack-mern-application-production.up.railway.app/books/getBook/${id}`);
        let bookData=response.data.book;
        setBookData(bookData[0]);
        console.log(book);
        }catch(error){
            navigate("/error", {
            state: {
                message: error.response?.data?.err
            }})
        }
    }

    useEffect(()=>{
        findBook();
    },[])
  return (
    <div>
      <BookForm book={book}/>
    </div>
  )
}

export default EditPage
