import React, { useState } from "react";
import Locations from "./components/Locations";
import Form from "./components/Form";
import 'bootstrap/js/dist/dropdown';
import Paginator from "./components/Paginator";

function App() {
  const [selectedBaths, setSelectedBaths] = useState({});
  const [selectedType, setSelectedType] = useState({});
  const [filter, setFilter] = useState('');

  const handleBathChange = (option) => {
    setSelectedBaths(option);
  }

  const handleTypeChange = (option) => {
    setSelectedType(option);
  }

  const handleFilterChange = (filter) => {
    setFilter(filter);
  }

  return (
    <div className="container-fluid">
      <div className="jumbotron">
        <h1 className="display-4">Available locations</h1>
        <p className="lead">Set a text to filter by address and/or select the type of location you are looking for, also the number of baths you are looking for.</p>
      </div>
      <div >
        <Form bathChanged={handleBathChange} typeChanged={handleTypeChange} filterChanged={handleFilterChange} />
        <Paginator />
      </div>
      <Locations selectedBaths={selectedBaths} selectedType={selectedType} filter={filter} />
    </div>
  );
}

export default App;
