import React, { useState } from "react";
import getSearch from "../utilis/YelpApi";
import { motion } from "framer-motion";

const SearchBar = ({ sortBy, setResults, setLimit }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [localLimit, setLocalLimit] = useState("");

  const handleSearchTermChange = ({ target }) => {
    setSearchTerm(target.value);
  };

  const handleSearchLocationChange = ({ target }) => {
    setSearchLocation(target.value);
  };

  const handleSearch = async () => {
    if (!searchTerm || !searchLocation) {
      alert("Make sure input values are not empty.");
      return;
    }

    try {
      const businesses = await getSearch(searchTerm, searchLocation, sortBy);
      setResults(businesses);
      console.log(businesses); // To verify the results
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const handleLimitChange = ({ target }) => {
    const newLimit = parseInt(target.value, 10);
    if (!isNaN(newLimit) && newLimit > 0) {
      setLocalLimit(newLimit);
      setLimit(newLimit); // Update the limit in the parent component
    }
  };

  return (
    <motion.div whileHover={{ scale: 1.05 }}>
      <div className="text-center">
        <div className="flex justify-center items-center gap-x-4 mb-16">
          <input
            type="search"
            className="relative block w-64 min-w-0 rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1 text-base font-normal leading-[1.6] text-gray-800 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-gray-800 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-gray-500 dark:placeholder:text-gray-200 dark:focus:border-primary"
            id="location-search"
            placeholder="Search Locations"
            aria-describedby="button-search"
            onChange={handleSearchLocationChange}
          />
          <input
            type="search"
            className="relative block w-64 min-w-0 rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1 text-base font-normal leading-[1.6] text-gray-800 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-gray-800 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-gray-500 dark:placeholder:text-gray-200 dark:focus:border-primary"
            id="business-search"
            placeholder="Search Businesses"
            aria-describedby="button-search"
            onChange={handleSearchTermChange}
          />
          <input
            type="number"
            className="relative block w-28 min-w-0 rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1 text-base font-normal leading-[1.6] text-gray-800 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-gray-800 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-gray-500 dark:placeholder:text-gray-200 dark:focus:border-primary"
            id="limit"
            placeholder="Enter amount of businesses to display"
            aria-describedby="button-search"
            onChange={handleLimitChange}
            value={localLimit}
          />
          <button
            className="bg-transparent hover:bg-gray-100 text-gray-800 font-semibold py-3 px-5 rounded inline-flex items-center hover:ease-in-out duration-300"
            onClick={handleSearch} // Trigger search on click
          >
            <svg
              className="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M10 2a8 8 0 016.32 12.906l4.387 4.387-1.414 1.414-4.387-4.387A8 8 0 1110 2zm0 2a6 6 0 100 12 6 6 0 000-12z" />
            </svg>
            <span>Search</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default SearchBar;
