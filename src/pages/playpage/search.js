import Api from "../../utils/api.js";
import { useState, useEffect } from "react";

const SearchResultContainer = () => {
  // Declare a new state variable, "results"
  const [results, setResults] = useState([]);
  console.log(Api);
  const searchCar = (query) =>
    Api.search(query)
      .then((res) => setResults(res.data))
      .catch();

  useEffect(() => {
    searchCar("camry");
    console.log(results);
    setResults();
  }, []);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   searchCar(search);
  // };
  // return (
  //   <div>
  //     <h1>Search Results</h1>
  //   </div>
  // );
};
export default SearchResultContainer;
