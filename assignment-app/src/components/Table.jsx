import React from "react";
import LoadingTable from "./LoadingTabel";

export default function Table({ data, loading, fetchError, errorState }) {
  console.log("In table.jsx data is: ", data);
  console.log("In table data.message is: ", data);
  console.error("In table fetchError is: ", fetchError);
  console.error("In table errorState is: ", errorState);

  if (!data || data.length === 0)
    return (
      <LoadingTable data={data} fetchError={fetchError} errorState={errorState} loading={loading} />
    );

  console.log("in table error is: ", fetchError);

  

  return (
    <>
      <p
        className="text-center"
        style={{ display: fetchError ? "block" : "none", color: "red" }}
      >
        Failed to Fetch the Data 
      </p>
      <p
        className="text-center"
        style={{ display: loading ? "block" : "none" }}
      >
        {" "}
        Loading Records...{" "}
      </p>
      <div className="container">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              {Object.keys(data[1]).map((key) => (
                <th>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((key, val) => {
              return (
                <tr key={val}>
                  {key["User ID"]}
                  <td>{key["Device Model"]}</td>
                  <td>{key["Operating System"]}</td>
                  <td>{key["App Usage Time (min/day)"]}</td>
                  <td>{key["Screen On Time (hours/day)"]}</td>
                  <td>{key["Battery Drain (mAh/day)"]}</td>
                  <td>{key["Number of Apps Installed"]}</td>
                  <td>{key["Data Usage (MB/day)"]}</td>
                  <td>{key["Age"]}</td>
                  <td>{key["Gender"]}</td>
                  <td>{key["User Behavior Class"]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
