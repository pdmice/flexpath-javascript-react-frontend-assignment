import React, {useState, useEffect} from "react";
import SearchForm from "./SearchForm";

export default function Search() {
 const [data, setData] = useState(null)
 
 return (
    <>
    <SearchForm data={data} setData={setData}/>
    </>
  )
}
