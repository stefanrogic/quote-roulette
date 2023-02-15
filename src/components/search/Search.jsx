import { useEffect } from "react";
import { useState } from "react";
// import { useGetRandomQuote } from "../../hooks/useGetRandomQuote";
import { useGetSearchedAuthors } from "../../hooks/useGetSearchedAuthors";
import "./search.scss";

const Search = ({ onHideModal, onNewAuthorQuote, onSetIsLoading }) => {
  const [searchInput, setSearchInput] = useState("");
  const { searchResults, getSearchedAuthors } = useGetSearchedAuthors();
  // const { newQuote, setIsLoading } = useGetRandomQuote();

  useEffect(() => {
    searchInput && getSearchedAuthors(searchInput);
  }, [searchInput]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <div className="search__bg" onClick={onHideModal} />
      <div className="search__box">
        <input value={searchInput} name="search" placeholder="Search" onChange={(e) => setSearchInput(e.target.value)} />
        <div className="search__results">
          {searchResults && (
            <ul>
              {searchResults.map((result, i) => (
                <li
                  key={i}
                  onClick={(e) => {
                    onHideModal();
                    onSetIsLoading(true);
                    onNewAuthorQuote(e.target.textContent);
                  }}
                >
                  {result.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default Search;
