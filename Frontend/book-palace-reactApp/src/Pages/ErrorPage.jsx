import React from "react";
import { useLocation } from "react-router-dom";

const ErrorPage = () => {
    const location = useLocation();
    const message =
        location.state?.message ||
        "The information you are trying to get is not available. Please try again with a valid request. Explore other features.";
    return (
        <div>
            <div
                className="alert alert-danger col-md-6 mt-3 m-auto"
                role="alert">
                <h4 className="alert-heading">
                    Something went wrong!
                </h4>
                <p>{message}</p>
            </div>
        </div>
    );
};

export default ErrorPage;