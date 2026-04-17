import React from 'react';
import { Link, useRouteError } from 'react-router';
import ErrorImg from "../../assets/img/error-404.png"

const NotFound = () => {
    const error = useRouteError();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 text-center p-5">
            {/* DaisyUI Hero Section */}
            <div className="max-w-md">
                <h1 className="text-9xl font-bold text-primary">
                    <img src={ErrorImg} alt="" />
                </h1>
                <p className="text-2xl font-semibold mt-4">Oops! Page Not Found</p>
                <p className="py-6 text-gray-500">
                    {error?.statusText || error?.message || "The page you're looking for doesn't exist or has been moved."}
                </p>
                
                {/* Back to Home Button */}
                <Link to="/" className="btn btn-primary px-8">
                    Go Back Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;