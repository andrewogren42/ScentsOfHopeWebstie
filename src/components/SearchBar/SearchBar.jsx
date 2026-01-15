import React from "react";
import "./SearchBar.css"

function SearchBar({changeSearchText}) {
    return(
    <div id="searchBarContainer">
      <input  type="search" 
              name="searchBar" 
              id="searchBar" 
              placeholder="Search"
              onChange={(event) => changeSearchText(event.target.value)}/>
      <img id="magnifyingGlassImg" src="/icons8-magnifying-glass-50.png" alt="Magnifying Glass"/>
    </div>
    )
}

export default SearchBar