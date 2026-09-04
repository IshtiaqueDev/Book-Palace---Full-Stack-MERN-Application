import React, { useEffect, useState } from 'react'
import { useParams , useNavigate} from 'react-router-dom';
import BookForm from './BookForm'
import axios from 'axios';

const EditPage = () => {
    const[book,setBookData]=useState('');
    const {id}=useParams();
    const navigate=useNavigate();

    let findBook=async()=>{
        try{
        let response=await axios.get(`http://localhost:5000/books/getBook/${id}`);
        let bookData=response.data;
        setBookData(bookData);
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
