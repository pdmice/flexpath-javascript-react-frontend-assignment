import React from "react";

export default function LoadingTable(data) {
  return (
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
    </div>
  );
}
