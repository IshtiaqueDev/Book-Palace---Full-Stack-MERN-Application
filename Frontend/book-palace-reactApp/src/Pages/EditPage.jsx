import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BookForm from "./BookForm";
import axios from "axios";

const EditPage = () => {
  const [book, setBookData] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const findBook = async () => {
    try {
      const response = await axios.get(
        `https://book-palace-full-stack-mern-application-production-1d9c.up.railway.app/books/getBook/${id}`
      );
      const bookData = response.data.book;
      console.log("BOOK RECEIVED:", bookData[0]);
      setBookData(bookData[0]);
    } catch (error) {
      navigate("/error", {
        state: {
          message: error.response?.data?.err,
        },
      });
    }
  };

  useEffect(() => {
    findBook();
  }, []);

  return (
    <div>
      <BookForm book={book} />
    </div>
  );
};

export default EditPage;