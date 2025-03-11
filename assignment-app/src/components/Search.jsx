import React, {useState} from "react";

export default function Search() {
  const [keyword, setKeyword] = useState();
  const [category, setCategory] = useState();
  const categories = ["gender", "operatingSystem", "model", "behaviorclass"]

  const handleCategory = (e) => {
    console.log(e.target.value)
    setCategory(e.target.value);
    
  }

  

  return (
    <>
    {console.log("category state is: ", category)}
    <div className="container">
     <form >
      <label className="form-label" for="category">Select data point to filter by</label>
      <select 
        className="form-select" 
        name="category"
        onChange={(e) => handleCategory(e)}>
        {categories.map((i) =>  <option value={i}>{i}</option>)}
      </select>
      <input type="text" className="form-control" placeholder="Search by keyword"></input>

      
    </form>
    </div>
    </>
  )
}
