import React, { useState, useEffect } from "react";
import "./App.css";
import List from "./components/List";
import BathsFilter from "./components/BathsFilter";
import TypeFilter from "./components/TypeFilter";
import Search from "./components/Search";
import { getLocations, getBaths, getTypes } from "./utils/api";

function App() {
  const [locations, setLocations] = useState([]);
  const [types, setTypes] = useState("");
  const [baths, setBaths] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [bathsOptions, setBathsOptions] = useState(null);
  const [typesOptions, setTypesOptions] = useState(null);

  useEffect(() => {
    const loadOptions = async () => {
        const bathsResponse = await getBaths();
        const typesResponse = await getTypes();
        setBathsOptions(bathsResponse.data);
        setTypesOptions(typesResponse.data);
    };
    loadOptions();
  }, []);

  useEffect(() => {
      const loadLocations = async () => {
        setLoading(true);
        const response = await getLocations({ baths, types });
        setLocations(response.data);
        setLoading(false);
      };
      loadLocations();
  }, [baths, types]);

  if (loading || !bathsOptions || !typesOptions) {
    return (
      <div className="Loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  let filteredLocations = locations;
  if (search) {
    filteredLocations = locations.filter(
        r => r.address.toLowerCase().includes(search.trim().toLowerCase())
    );
  }
  filteredLocations = filteredLocations.slice(0, 50);

  return (
    <div className="App">
      <div className="Header">
        <Search search={search} setSearch={setSearch} />
        <BathsFilter baths={baths} setBaths={setBaths} bathsOptions={bathsOptions} />
        <TypeFilter types={types} setTypes={setTypes} typesOptions={typesOptions} />
      </div>
      <List locations={filteredLocations} bathsOptions={bathsOptions} typesOptions={typesOptions} />
    </div>
  );
}

export default App;
