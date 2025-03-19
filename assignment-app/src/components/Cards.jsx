import React from "react";

export default function Cards(data) {
  console.log("In cards data is: ", data);
  if (!data.data || data.data.length === 0) return <p>Loading...</p>;
  return <p>Put some data here</p>;
}
