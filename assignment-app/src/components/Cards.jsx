import React from "react";
import LoadingCard from "./LoadingCard";

export default function Cards({data, loading}) {
  
  const average = (field) => {
    const { sum, count } = data.reduce(
      (acc, obj) => {
        if (obj[field] !== undefined && !isNaN(parseFloat(obj[field]))) {
          acc.sum += parseFloat(obj[field]);
          acc.count++;
        }
        return acc;
      },
      { sum: 0, count: 0 }
    );
    return sum / count;
  };

  const median = (field) => {
    let arr = data.map((element) => element[field]);
    const sorted = arr.sort((a,b) => { return a - b});
    const middle = Math.floor(sorted.length / 2);
    
    if (sorted.length % 2 === 0) {
      return (parseFloat(sorted[middle]) + parseFloat(sorted[middle - 1])) / 2;
    } else {
      return sorted[middle];
    }
  };
  
  if (!data || data.length === 0 || loading===true)
    return <LoadingCard loading={loading} />;
  return (
    <div class="container ">
      <p>Displaying {data.length} records</p> 
      <div class="row justify-content-center">
        <div class="col-md-3">
          <div class="card text-center">
            <div class="card-body">
              <h5 className="card-title">App Usage Time (min/day)</h5>
              <p>
                Average - {Math.round(average("App Usage Time (min/day)"))}{" "}
                Minutes
              </p>
              <p>
                Median - {median("App Usage Time (min/day)")}{" "}
                Minutes
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card text-center">
            <div class="card-body">
              <h5 className="card-title">Screen On Time (hours/day)</h5>
              <p>
                Average - {Math.round(average("Screen On Time (hours/day)"))}{" "}
                Hours
              </p>
              <p>
                Median - {median("Screen On Time (hours/day)")}{" "}
                Hours
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card text-center">
            <div class="card-body">
              <h5 className="card-title">Number Of Apps Installed</h5>
              <p>
                Average - {Math.round(average("Number of Apps Installed"))} Apps
              </p>
              <p>
                Median - {median("Number of Apps Installed")} Apps
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card text-center">
            <div class="card-body">
              <h5 className="card-title">Age</h5>
              <p>Average - {Math.round(average("Age"))} Years Old</p>
              <p>Median - {Math.round(median("Age"))} Years Old</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
