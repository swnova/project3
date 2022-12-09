import API from "../../utils/API.js";
import { useState, useEffect } from "react";

const SearchResultContainer = () => {
  // Declare a new state variable, "results"
  const [results, setResults] = useState([]);
  console.log(API);
  const searchCar = (query) =>
    API.search(query)
      .then((res) => setResults(res.data))
      .catch();

  useEffect(() => {
    searchCar("camry");
    console.log(results);
    setResults();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    searchCar(search);
  };
  return (
    <div>
      <h1>Search Results</h1>
    </div>
  );
};
export default SearchResultContainer;
