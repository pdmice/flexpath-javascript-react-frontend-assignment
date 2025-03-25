import React from "react";

export default function LoadingCard() {
  return (
    <>
      <div className="container-flex my-5 mx-5">
        <div className="card-group col-row-1">
          <div className="card w-25 mx-5">
            <p>Card 1</p>
          </div>
          <div className="card w-25 mx-5">
            <p>Card 2</p>
          </div>
          <div className="card w-25 mx-5">
            <p>Card 3</p>
          </div>
          <div className="card w-25 mx-5">
            <p>Card 4</p>
          </div>
        </div>
      </div>
    </>
  );
}
