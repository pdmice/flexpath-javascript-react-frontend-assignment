import React, { useState, useEffect } from "react";

export default function SearchForm() {
  const [keyword, setKeyword] = useState();
  const [category, setCategory] = useState("gender");
  const [queryString, setQueryString] = useState("female");

  const categories = ["gender", "operatingSystem", "model", "behaviorclass"];

  useEffect(() => {
    console.log("In useEffect queryString is: ", queryString);
  }, [queryString]);

  const handleCategory = (e) => {
    console.log(e.target.value);
    setCategory(e.target.value);
  };

  const handleKeyword = (e) => {
    console.log(e.target.value);
    setKeyword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = `/api/data/search/?category=${category}&keyword=${keyword}`;
    setQueryString(query);
    console.log("In handleSubmit category is: ", category);
    console.log("In handleSubmit keyword is: ", keyword);
    console.log("In handleSubmit query is: ", query);
    console.log("In handleSubmit queryString is: ", queryString);
  };

  return (
    <>
      {console.log("category state is: ", category)}
      {console.log("keyword is: ", keyword)}
      <div className="container">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <label className="form-label" for="category">
            Select data point to filter by
          </label>
          <select
            className="form-select"
            name="category"
            onChange={(e) => handleCategory(e)}
          >
            {categories.map((i) => (
              <option value={i}>{i}</option>
            ))}
          </select>
          <input
            type="text"
            className="form-control"
            placeholder="Search by keyword"
            onChange={(e) => handleKeyword(e)}
          ></input>
          <div class="d-grid gap-2">
            <button type="submit" className="btn btn-outline-secondary">
              Search
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
