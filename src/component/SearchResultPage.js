import React from "react";
import SearchResult from "./SearchResult";
import { useSelector } from "react-redux";

function SearchResultPage() {
  const filteredResults = useSelector((state) => state.search.searchResult);
  return (
    <div>
      <h1 className="text-xl text-center font-semibold m-4">Search Results</h1>
      <SearchResult filteredResults={filteredResults} />
    </div>
  );
}

export default SearchResultPage;
