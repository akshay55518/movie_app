import React from "react";

const Search = ({searchTerm, setSearchTerm}) => {
return (
    // <div className="text-white text-3xl">{searchTerm}</div>
    <div className="search">
        <div>
            <img src="./search.png" alt="search" />
            <input type="text" placeholder="Search a movie" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />
        </div>

    </div>
)
}

export default Search