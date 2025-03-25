import React, { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import Cards from "./Cards";
import Table from "./Table";
import Card2 from "./Cards2";

export default function Search() {
  const [data, setData] = useState(null);

  return (
    <>
      <div className="container">
        <div className="row row align-items-center gy-6 w-25">
          <div className="col p-2">
            <SearchForm data={data} setData={setData} />
          </div>
        </div>
      </div>
      <div className="row align-items-center gy-6">
        <div className="col p-2">
          <Card2 data={data} />
        </div>
      </div>
      <div className="row align-items-center gy-6">
        <div className="col p-2">
          <Table data={data} />
        </div>
      </div>
    </>
  );
}
