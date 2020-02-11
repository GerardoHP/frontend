import React from "react";

function Location({ location, bathsOptions, typesOptions }) {
  const baths = bathsOptions.find(b => b.id === location.baths);
  const types = typesOptions.find(t => t.id === location.types);

  return (
    <div className="Location">
      <div>
        <h1 className="Location-Title">
          {location.address}
        </h1>
        <div className="Location-Meta">
          {types && <span>{types.name}</span>}
          {baths && <span>{baths.name}</span>}
        </div>
      </div>
    </div>
  );
}

export default Location;
