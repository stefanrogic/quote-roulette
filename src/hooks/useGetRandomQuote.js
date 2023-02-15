import { useState } from "react";
import { fetchRandomAuthorQuote, fetchRandomQuote } from "../api/quotable";

export const useGetRandomQuote = () => {
  const [quote, setQuote] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const newQuote = () => {
    fetchRandomQuote()
      .then((q) => {
        setQuote((prev) => (prev = q));
      })
      .then(() => setIsLoading(false));
  };

  const newAuthorQuote = (author) => {
    fetchRandomAuthorQuote(author)
      .then((q) => {
        setQuote((prev) => (prev = q));
        console.log(q);
      })
      .then(() => setIsLoading(false));
  };

  // const newAuthorQuote = (author) => {};

  return { quote, isLoading, newQuote, newAuthorQuote, setIsLoading };
};
