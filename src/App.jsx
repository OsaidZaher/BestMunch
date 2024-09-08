import React, { useState } from "react";
import SearchBar from "./components/Searchbar"; // Adjust path if needed
import BusinessList from "./components/BusniessList";
import NavBar from "./components/Navbar";
import "./App.css";
function App() {
  const [sortBy, setSortBy] = useState("best_match");
  const [results, setResults] = useState([]);
  const [limit, setLimit] = useState("");

  return (
    <div className="">
      <NavBar setSortBy={setSortBy} />
      <div className="">
        <SearchBar
          sortBy={sortBy}
          setResults={setResults}
          setLimit={setLimit}
        />
      </div>
      <BusinessList businesses={results} limit={limit} />
    </div>
  );
}

export default App;
