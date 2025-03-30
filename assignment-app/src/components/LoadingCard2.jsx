import React from "react";

export default function LoadingCard2({loading}) {
  console.error("in loadingcard loading is: ", loading);
  return (
    <div className="container my-5">
      {loading === true ? <p>Loading... </p> : <p>No Records to Display</p>}
      <div class="row justify-content-center">
        <div class="col-md-3">
          <div class="card text-center">
            <div class="card-body">
              <h5 className="card-title">App Usage Time (min/day)</h5>
              <p>Average: 0</p>
              <p>Median: 0</p>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card text-center">
            <div class="card-body">
              <h5 className="card-title">Screen On Time (hours/day)</h5>
              <p>Average: 0</p>
              <p>Median: 0</p>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card text-center">
            <div class="card-body">
              <h5 className="card-title">Number Of Apps Installed</h5>
              <p>Average: 0</p>
              <p>Median: 0</p>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card text-center">
            <div class="card-body">
              <h5 className="card-title">Age</h5>
              <p>Average: 0</p>
              <p>Median: 0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
