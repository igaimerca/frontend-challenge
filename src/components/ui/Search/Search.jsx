import React from 'react'
import Icons from "../../../assets/icons/index";
import "./Search.scss";

function Search() {
  return (
    <div className="search-input flex">
        {Icons.Search}
        <input type="text" placeholder="Search" className="small" />
    </div>
  )
}

export default Search