import React, { useContext } from "react";
import { SearchContext } from "./SearchWord";

const Search = () => {
  const { word, searchResult, searchSubmit } = useContext(SearchContext);
  return (
    <center>
      <input
        type="text"
        value={word}
        onChange={e => searchResult(e.target.value)}
        onKeyPress={e => (e.key === "Enter" ? searchSubmit() : null)}
      />
      <button onClick={() => searchSubmit()}>search</button>
    </center>
  );
};

export default Search;
