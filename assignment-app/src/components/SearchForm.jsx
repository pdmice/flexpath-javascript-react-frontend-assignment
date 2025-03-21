import React, { useState, useEffect } from "react";

export default function SearchForm({ data, setData }) {
  const [keyword, setKeyword] = useState();
  const [category, setCategory] = useState("gender");
  const [queryString, setQueryString] = useState(
    "/api/data/search?typefilter=gender&keyword=female"
  );

  const categories = ["gender", "operatingSystem", "model", "behaviorclass"];

  //Hitting the submit button will set the queryString, this useEffect will fetch
  //the data and trigger a render whenever that happens

  useEffect(() => {
    async function fetchData(qstring) {
      await fetch(qstring)
        .then((response) => response.json())
        .then((json) => {
          console.log("Json is: ", json);
          setData(json);
        })
        .catch((error) => console.log(error));
      console.log(data);
    }
    fetchData(queryString);
  }, [queryString]);

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleKeyword = (e) => {
    console.log(e.target.value);
    setKeyword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = `/api/data/search?filtertype=${category}&keyword=${keyword}`;
    setQueryString(query);
  };

  return (
    <>
      {console.log("queryString in return is: ", queryString)}
      <div className="container">
        <div className="row-align-items-center gy-5">
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <label className="form-label" htmlFor="category">
              Select data point to filter by
            </label>
            <div className="col gx-6">
              <select
                className="form-select"
                name="category"
                onChange={(e) => handleCategory(e)}
              >
                {categories.map((i) => (
                  <option value={i}>{i}</option>
                ))}
              </select>
            </div>

            <input
              type="text"
              className="form-control"
              placeholder="Search by keyword"
              onChange={(e) => handleKeyword(e)}
            ></input>
            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-outline-secondary">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
