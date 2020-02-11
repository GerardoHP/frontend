import React from "react";

function Search({ search, setSearch }) {
  return (
    <div className="Filter">
      <input
        placeholder="Search by addres"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;
