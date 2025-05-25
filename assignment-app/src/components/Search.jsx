import React, { useState} from "react";
import SearchForm from "./SearchForm";
import Cards from "./Cards";
import Table from "./Table";
import Card2 from "./Cards";

export default function Search() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fetchError,setFetchError] = useState(null)

  return (
    <>
      <div className="container">
        <div className="row row align-items-center gy-6 w-25">
          <div className="col p-2">
            <SearchForm
              data={data}
              setData={setData}
              loading={loading}
              setLoading={setLoading}
              fetchError={fetchError}
              setFetchError={setFetchError}
            />
          </div>
        </div>
      </div>
      <div className="row align-items-center gy-6">
        <div className="col p-2">
          <Cards data={data} loading={loading} />
        </div>
      </div>
      <div>
      <h3 style={{display: fetchError ? "block" : "none",color: "red"}}> Failed to Fetch the Data</h3>
      </div>
      <div className="row align-items-center gy-6">
        <div className="col p-2">
          <Table data={data} loading={loading} />
        </div>
      </div>
    </>
  );
}
