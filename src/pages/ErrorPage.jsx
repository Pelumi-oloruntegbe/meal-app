import React from 'react'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="container text-center">
      <img
        src="https://img.freepik.com/free-vector/404-error-with-cute-animal-concept-illustration_114360-1900.jpg?size=626&ext=jpg&ga=GA1.2.2085038139.1673344453&semt=ais"
        alt="not found"
        className='img-fluid'
      />
      <Link to="/" className="d-block mx-auto my-3">
        {" "}
        <button className="btn btn-success text-white">Back To Homepage</button>
      </Link>
    </div>
  );
}

export default ErrorPage;
