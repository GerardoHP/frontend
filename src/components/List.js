import React from "react";
import Location from "./Location";

function List({ locations, bathsOptions, typesOptions }) {
  if (locations.length === 0) {
    return (
      <div className="List-Empty">
        <h1>No locations found</h1>
      </div>
    );
  }

  return (
    <div className="List">
      {locations.map(location => {
        return <Location key={location.id} location={location} bathsOptions={bathsOptions} typesOptions={typesOptions} />;
      })}
    </div>
  );
}

export default List;
