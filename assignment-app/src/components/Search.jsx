import React, { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import Cards from "./Cards";

export default function Search() {
  const [data, setData] = useState(null);

  return (
    <>
      <div className="container">
        <div className="row row align-items-center gy-6">
          <div className="col">
            <SearchForm data={data} setData={setData} />
          </div>
          <div className="col "></div>
        </div>
      </div>
      <div className="row align-items-center gy-6">
        <Cards data={data} />
      </div>
    </>
  );
}
