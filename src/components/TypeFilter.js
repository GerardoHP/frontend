import React from "react";

function TypeFilter({ types, setTypes, typesOptions }) {
  return (
    <div className="Filter">
      <select value={types} onChange={e => setTypes(e.target.value)}>
        <option value="">Select Type</option>
        {typesOptions.map(t => (
          <option key={t.id} value={t.id}>
            {t.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default TypeFilter;
