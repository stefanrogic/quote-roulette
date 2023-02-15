import { useState } from "react";
import { fetchAuthors, fetchSearchedAuthors } from "../api/quotable";

export const useGetSearchedAuthors = () => {
  const [searchResults, setSearchResults] = useState();

  const getAllAuthors = () => {
    fetchAuthors().then((q) => {
      setSearchResults((prev) => (prev = q.results));
    });
  };

  const getSearchedAuthors = (input) => {
    fetchSearchedAuthors(input).then((q) => {
      setSearchResults((prev) => (prev = q.results));
    });
  };

  return { searchResults, setSearchResults, getAllAuthors, getSearchedAuthors };
};
