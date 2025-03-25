import React from "react";
import LoadingCard2 from "./LoadingCard2";

export default function Cards(data) {
  console.log("In cards data is: ", data);

  const average = (field) => {
    const { sum, count } = data.data.reduce(
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
    let arr = data.data.map((element) => element[field]);
    const sorted = arr.sort();
    const middle = Math.floor(sorted.length / 2);
    console.log("Middle is: ", middle);
    console.log("Arr[middle] is: ", sorted[middle]);
    console.log("Sorted is: ", sorted);
    console.log(sorted[middle - 1] + sorted[middle]);

    if (sorted.length % 2 === 0) {
      return (parseInt(sorted[middle]) + parseInt(sorted[middle - 1])) / 2;
    } else {
      return sorted[middle];
    }
  };

  if (!data.data || data.data.length === 0) return <LoadingCard2 />;
  return (
    <>
      <div className="container-flex">
        <p> Displaying {data.data.length} records</p>
        <div className="row row-col-2 align-items-center ">
          <div className="card-group">
            <div className="col-md-4 mb-3 flex align-items-center w-25">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">App Usage Time (min/day)</h5>
                <p>
                  Average: {Math.round(average("App Usage Time (min/day)"))}
                </p>
                <p>Median: {Math.round(median("App Usage Time (min/day)"))}</p>
              </div>
            </div>
            <div className="col-md-4 mb-3 flex align-items-center w-25">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Screen On Time (hours/day)</h5>
                <p>
                  Average: {Math.round(average("Screen On Time (hours/day)"))}
                </p>
                <p>
                  Median: {Math.round(median("Screen On Time (hours/day)"))}
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-3 flex align-items-center w-25">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Number Of Apps Installed</h5>
                <p>
                  Average: {Math.round(average("Number of Apps Installed"))}
                </p>
                <p>Median: {Math.round(median("Number of Apps Installed"))}</p>
              </div>
            </div>
            <div className="col-md-4 mb-3 flex align-items-center w-25">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Age</h5>
                <p>Average: {Math.round(average("Age"))}</p>
                <p>Median: {Math.round(median("Age"))}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
