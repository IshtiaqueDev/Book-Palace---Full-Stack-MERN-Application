import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Card from "../components/Card";

const FavouriteBooks = () => {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    const getFavouriteBooks = async () => {
      try {
        const response = await axios.get("https://book-palace-full-stack-mern-application-production-1d9c.up.railway.app/user/favourites", {
          withCredentials: true,
        });
        setBooks(response.data.favouriteBooks);
      } catch (error) {
        toast.error(error.response?.data?.message || "Could not load favourite books");
        setBooks([]);
      }
    };

    getFavouriteBooks();
  }, []);

  if (books === null) {
    return <h5 className="text-center mt-5">Loading favourite books...</h5>;
  }

  return (
    <div className="container py-4">
      <h4 className="fw-bold mb-4">Favourite Books</h4>
      {books.length === 0 ? (
        <h5 className="text-center mt-5">You have not added any favourite books yet.</h5>
      ) : (
        <div className="row g-4">
          {books.map((book) => (
            <div key={book._id} className="col-6 col-md-4 col-lg-3">
              <Card book={book} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavouriteBooks;