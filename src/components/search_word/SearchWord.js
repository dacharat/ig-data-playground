import React, { useState } from "react";
import Search from "./Search";
import Result from "./Result";

export const SearchContext = React.createContext();

const SearchWord = () => {
  const [word, setWord] = useState("");
  const [result, setResult] = useState("")
  const searchResult = word => {
    setWord(word);
  };
  const searchSubmit = () => {
    setResult(word)
    setWord("")
  }

  return (
    <SearchContext.Provider value={{ result, word, searchResult, searchSubmit }}>
      <Search />
      <Result />
    </SearchContext.Provider>
  );
};

export default SearchWord;
