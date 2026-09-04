import React, { useState , useEffect} from 'react'
import {useNavigate} from "react-router-dom"
import axios from "axios"
import { toast } from 'react-toastify'

const AddBook = ({book}) => {
  const initialState= {
      title: "",
      description: "",
      author: "",
      category: "",
    }
let navigate=useNavigate();
let[bookData,setBookData]=useState(initialState);
let[validated,setValidation]=useState(false);
const [imageFile, setImageFile] = useState(null);
const [pdfFile, setPdfFile] = useState(null);
const [imagePreview, setImagePreview] = useState("");

useEffect(()=>{
  if(book){
    setBookData(book)
    setImagePreview(book?.image?.url || book?.imageUrl || "")
  } else {
    setBookData(initialState)
    setImagePreview("")
  }
},[book]);

  const changeInput=(e)=>{
    setBookData((prevData)=>(
      {
        ...prevData,[e.target.name]:e.target.value
      }
    ))
  }


  const handlePdfChange = (e) => {
    setPdfFile(e.target.files[0]);
};  

const handleImageChange = (e) => {
  const file = e.target.files[0];
  setImageFile(file);
  if (file) {
    setImagePreview(URL.createObjectURL(file));
  } else {
    setImagePreview(book?.image?.url || book?.imageUrl || "");
  }
};

  const handleSubmit = async (e) => {
  e.preventDefault();

  
  const form = e.currentTarget;

  if (!form.checkValidity()) {
    setValidation(true);
    return;
  }

  const formData = new FormData();

  formData.append("title", bookData.title);
  formData.append("description", bookData.description);
  formData.append("author", bookData.author);
  formData.append("category", bookData.category);

  if (imageFile) {
    formData.append("image", imageFile);
  }
  if (pdfFile) {
    formData.append("bookPDF", pdfFile);
  }

  try {
    console.log(bookData);
    console.log("BOOK DATA:", bookData);
console.log("IMAGE:", imageFile);
console.log("PDF:", pdfFile);
    const response = await axios({
      method: book ? "put" : "post",
      url: book
  ? `http://localhost:5000/books/edit/${book._id}`
  : "http://localhost:5000/books",
      data: formData,
      withCredentials: true
    });
    toast.success(response.data.message);
    setBookData(initialState);
    setImageFile(null);
    setPdfFile(null);
    setValidation(false);
    navigate("/books");
  } catch (err) {
    toast.error("Error adding book. Please try again.");
  }
};

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8">
            <h3 className="mb-2">{book?"Edit Book":"Add Book"}</h3>
            <form  className={validated?"was-validated":"needs-validation"}  encType="multipart/form-data" noValidate onSubmit={handleSubmit}>
              <div className="mb-3">
              <label htmlFor="title" className="form-label">Title:</label>
              <input type="text" id="title" name="title" placeholder="Add a catchy title" required className="form-control" value={bookData.title} onChange={changeInput}/>
        <div className="valid-feedback">
                Title Looks Good !
              </div>
              <div className="invalid-feedback">
                Please enter a title!
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="description">Description</label>
              <textarea name="description" id="description" placeholder="Enter Description" required className="form-control"  value={bookData.description}  onChange={changeInput} style={{ resize: 'none' }}></textarea>
        <div className="invalid-feedback">
                Please enter a short description !
              </div>
            </div>

          {(imagePreview || bookData.image?.url || bookData.imageUrl) && (
            <div className="mb-3">
              <label htmlFor="">Preview Image:</label>
             <br />
              <img src={imagePreview || bookData.image?.url || bookData.imageUrl} alt="Preview Image" height={200} width={200} style={{ objectFit: 'cover' }} />
            </div>
          )}

  <div className="mb-3">
  <label htmlFor="imageFile" className="form-label">
    Upload Book Cover:
  </label>
  <input
    className="form-control"
    type="file"
    id="imageFile"
     name="image"
    accept="image/*"
    onChange={handleImageChange}
    required={!book}
  />
</div>


<div className="mb-3">
  <label htmlFor="pdfFile" className="form-label">
    Upload PDF Of Book:
  </label>
  <input
    className="form-control"
    type="file"
    id="pdfFile"
    name='bookPDF'
    accept="application/pdf"
    onChange={handlePdfChange}
    required={!book}
  />
</div>
          
              <div className="row">
              <div className="mb-3 col-md-12">
                <label htmlFor="author" className="form-label">Author Name:</label>
                <input id="author" name="author" placeholder="Enter author name" required className="form-control" value={bookData.author} onChange={changeInput}/>
          <div className="invalid-feedback">
                  Please Enter a Valid Name!
                </div>
              </div>
            </div>


            <div className="row">
              <div className="mb-3 col-md-12">
                <label id="category" htmlFor="category">Category:</label>
                <select className="form-select" name='category' onChange={changeInput} required value={bookData.category}>
                <option value="">Choose an Option</option>
                <option value="Self Development">Self Development</option>
                <option value="Life lessons">Life lessons</option>
                <option value="Novels">Novels</option>
                <option value="Stories">Stories</option>
                <option value="Others">Others</option>
              </select>
              <div className="invalid-feedback">
                  Please select a category!
                </div>
              </div>
            </div>


            <button className="btn btn-dark">{book?"Update Book":"Add Book"}</button>
            <br/><br/>
          </form>
          </div>
        </div>
    </div>
  )
}

export default AddBook
