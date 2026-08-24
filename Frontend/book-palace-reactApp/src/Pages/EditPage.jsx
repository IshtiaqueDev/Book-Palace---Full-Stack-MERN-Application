import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import BookForm from './BookForm'
import axios from 'axios';

const EditPage = () => {
    const[book,setBookData]=useState('');
    const {id}=useParams();

    let findBook=async()=>{
        try{
        let response=await axios.get(`http://localhost:5000/books/getBook/${id}`);
        let bookData=response.data.book;
        setBookData(bookData[0]);
        console.log(book);
        }catch(err){
            console.log(err);
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
