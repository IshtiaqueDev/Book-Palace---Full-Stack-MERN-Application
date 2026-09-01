import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useContext } from "react";
import { UserContext } from '../context/UserProvider'

export const ReviewCards = ({ id }) => {
    const [allReviews, setAllReviews] = useState([]);
    const {user}=useContext(UserContext)


    const handleDelete=async(id)=>{
        console.log(id);
        try{
            console.log("Before delete");
            let response=await axios.delete(`https://book-palace-full-stack-mern-application-production.up.railway.app/reviews/delete/${id}`,{
                withCredentials:true
            });
            console.log("After delete ");
            toast.success(response.data.message)
        }catch(err){
            toast.error("Something went wrong!");
        }
    }


    const getReviews = async () => {
        try {
            const response = await axios.get(
                `https://book-palace-full-stack-mern-application-production.up.railway.app/reviews/${id}/getall`
            );

            setAllReviews(response.data.reviews);
        } catch (err) {
            toast.error("Something Went Wrong!");
        }
    };

    useEffect(() => {
        getReviews();
    }, [allReviews]);

    return (
        <div className="container mt-5 mb-5">

            <h3 className="fw-bold mb-4">
                User Reviews
            </h3>
            {allReviews.length === 0 ? (
                <div className="text-center text-muted py-5">
                    <p>No reviews yet.</p>
                </div>
            ) : (
                <div className="row g-4">
                    {allReviews.map((el) => (
                        <div
                            className="col-12 col-md-6"
                            key={el._id}
                        >
                            <div
                                className="card h-100 border-0 shadow"
                                style={{
                                    borderRadius: "12px"
                                }}
                            >
                                <div className="card-body p-4">
                                    {/* User */}
                                    <div className="d-flex align-items-center mb-3">
                                        {/* Avatar */}
                                        <div
                                            className="rounded-circle bg-primary text-white
                                            d-flex align-items-center justify-content-center
                                            me-3 fw-bold"
                                            style={{
                                                width: "45px",
                                                height: "45px",
                                                minWidth: "45px",
                                                fontSize: "18px"
                                            }}
                                        >
                                            {el.author.username
                                                .charAt(0)
                                                .toUpperCase()}
                                        </div>
                                        {/* Username */}
                                        <div>
                                            <h5 className="mb-0 fw-semibold">
                                                {el.author.username}
                                            </h5>

                                            <small className="text-muted">
                                                Verified User
                                            </small>
                                        </div>
                                    </div>
                                    {/* Rating */}
                                    <div className="mb-3">

                                        <fieldset
                                            className="starability-result"
                                            data-rating={el.rating}
                                        >
                                        </fieldset>
                                    </div>


                                    {/* Comment */}
                                    <p className="card-text text-secondary mb-0">
                                        {el.comment}
                                    </p>
                                {
                                    user
                                    &&
                                    (user._id===el.author._id)
                                    &&
                                    <button className="btn btn-danger mt-3" onClick={()=>handleDelete(el._id)}>Delete</button>
                                }    
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};