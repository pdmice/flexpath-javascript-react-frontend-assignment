import React from "react";
import LoadingTable from "./LoadingTabel";

export default function Table(data) {
  if (!data.data || data.data.length === 0) return <LoadingTable data={data} />;

  return (
    <>
     <div className="container"> 
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              {Object.keys(data.data[1]).map((key) => (
                <th>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.data.map((key, val) => {
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
