import React, { useState, useEffect } from "react";

export default function SearchForm({ data, setData, loading, setLoading }) {
  const [keyword, setKeyword] = useState();
  const [category, setCategory] = useState("gender");

  //Check to see if there is a sessionStorage qs key, if so use that as default
  const [queryString, setQueryString] = useState(
    sessionStorage.getItem("qs")
      ? sessionStorage.getItem("qs")
      : "/api/data/search?typefilter=gender&keyword=female"
  );

  const categories = ["gender", "operatingSystem", "model", "behaviorclass"];

  //Hitting the submit button will set the queryString, this useEffect will fetch
  //the data and trigger a render whenever that happens

  useEffect(() => {
    setLoading(true);
    async function fetchData(qstring) {
      setTimeout(() => {
        console.error("Loading... ");
      }, 2000);
      await fetch(qstring)
        .then((response) => response.json())
        .then((json) => {
          console.log("Json is: ", json);
          setData(json);
        })
        .catch((error) => console.log(error));
      console.log(data);
    }
    //Call the fetchdata function via setTimeout so Loading... displays in demo
    setTimeout(() => {
      fetchData(queryString);
      setLoading(false);
    }, 800);
  }, [queryString]);

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleKeyword = (e) => {
    setKeyword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = `/api/data/search?filtertype=${category}&keyword=${
      keyword ? keyword : ""
    }`;
    setQueryString(query);
    sessionStorage.setItem("qs", query);
  };

  return (
    <>
      <div className="container my-5">
        <div className="row-align-items-center ">
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <label className="form-label border-top" htmlFor="category">
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
            <p className="mt-3">Search by Keyword</p>
            <input
              type="text"
              className="form-control"
              placeholder="Search by keyword"
              onChange={(e) => handleKeyword(e)}
            ></input>
            <div className="d-grid gap-2 border-top mt-3">
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
