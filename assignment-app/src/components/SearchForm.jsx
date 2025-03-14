import React, {useState, useEffect} from 'react'

export default function SearchForm(){
  const [keyword, setKeyword] = useState();
  const [category, setCategory] = useState("gender");
  const [queryString, setQueryString] = useState()

  const categories = ["gender", "operatingSystem", "model", "behaviorclass"]

  useEffect((queryString) => {
  console.log(queryString)
  },[queryString])
  
  const handleCategory = (e) => {
    console.log(e.target.value)
    setCategory(e.target.value);
    
  }

  const handleKeyword = (e) => {
    console.log(e.target.value)
    setKeyword(e.target.value)
  }

  const handleSubmit = (category, keyword) => {
    setQueryString("/api/data/search/?" + category + "&" + keyword);   
  }

  return (
    <>
    {console.log("category state is: ", category)}
    {console.log("keyword is: ", keyword)}
    <div className="container">
     <form  onSubmit={(category, keyword) => {handleSubmit(category,keyword)}}>
      <label className="form-label" for="category">Select data point to filter by</label>
      <select 
        className="form-select" 
        name="category"
        onChange={(e) => handleCategory(e)}>
        {categories.map((i) =>  <option value={i}>{i}</option>)}
      </select>
      <input 
        type="text" 
        className="form-control" 
        placeholder="Search by keyword"
        onChange={(e) => handleKeyword(e)}
        ></input>
        <div class="d-grid gap-2">
        <button type="submit" className="btn btn-outline-secondary">Search</button>
        </div>
      
    </form>
    </div>
    </>
  )
}