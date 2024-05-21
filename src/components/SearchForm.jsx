import React, { useRef } from "react";
import { useGlobalContext } from "../Context";

const SearchForm = () => {
 const {setSearchValue} = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const inputContainer = useRef();
  const searchMeal = () => {
    setSearchValue(inputContainer.current.value);
  };

  return (
    <div className="my-3">
      <div className="row d-flex justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit} className="mx-auto">
            <label
              htmlFor="search"
              className="form-label text-success fw-bold text-center mx-auto d-block"
            >
              Search For Your Favorite Meals
            </label>
            <input
              ref={inputContainer}
              onChange={searchMeal}
              type="text"
              id="search"
              className="border border-success form-control shadow-none bg-success-subtle"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
