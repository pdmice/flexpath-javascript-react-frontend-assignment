import React from "react";

export default function LoadingTable({
  data,
  errorState,
  fetchError,
  loading,
}) {
  console.log("In LoadingTable fetchError is:", fetchError);

  return (
    <>
      <p
        className="text-center"
        style={{ display: fetchError ? "block" : "none", color: "red" }}
      >
        {" "}
        Failed to Fetch the Data
      </p>

      <div className="container">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Device Model</th>
              <th>Operating System</th>
              <th>App Usage Time (min/day)</th>
              <th>Screen On Time (hours/day)</th>
              <th>Battery Drain (mAh/day)</th>
              <th>Number of Apps Installed</th>
              <th>Data Usage (MB/day)</th>
              <th> Age </th>
              <th> Gender </th>
              <th>User Behavior Class</th>
            </tr>
          </thead>
        </table>
        <p
          className="text-center"
          style={{ display: loading ? "block" : "none" }}
        >
          {" "}
          Loading Records...{" "}
        </p>
      </div>
    </>
  );
}
