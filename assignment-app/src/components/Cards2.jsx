import React from "react";
import LoadingCard2 from "./LoadingCard2";

//TODO: Something seems off with the median calculation. In the demo video median for usage is 227.5 and
// screentime is 4.9 hours but that's not what I'm getting here.
export default function Card2({data, loading}) {
  console.log("In card2 loading is:",loading)
  
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
    console.log("In median sorted is: ", sorted)
    console.log("In median sorted.lenght is: ", sorted.length)
    console.log("In median func middle is: ",middle); 
    console.log("And the value of sorted[middle] is: ", sorted[middle])
    
    if (sorted.length % 2 === 0) {
      return (parseInt(sorted[middle]) + parseInt(sorted[middle - 1])) / 2;
    } else {
      return sorted[middle];
    }
  };
  
  if (!data || data.length === 0 || loading===true)
    return <LoadingCard2 loading={loading} />;
  return (
    <div class="container my-2">
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
