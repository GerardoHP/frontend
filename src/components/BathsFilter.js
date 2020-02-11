import React from "react";

function BathsFilter({ baths, setBaths, bathsOptions }) {
  return (
    <div className="Filter">
      <select value={baths} onChange={e => setBaths(e.target.value)}>
        <option value="">Select Baths</option>
        {bathsOptions.map(b => (
          <option key={b.id} value={b.id}>
            {b.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default BathsFilter;
