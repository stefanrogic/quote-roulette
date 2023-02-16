import { useState } from "react";
import { fetchRandomAuthorQuote, fetchRandomCategoryQuote, fetchRandomQuote } from "../api/quotable";

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
      })
      .then(() => setIsLoading(false));
  };

  const newCategoryQuote = (category) => {
    fetchRandomCategoryQuote(category)
      .then((q) => {
        setQuote((prev) => (prev = q));
      })
      .then(() => setIsLoading(false));
  };

  return { quote, isLoading, newQuote, newAuthorQuote, newCategoryQuote, setIsLoading };
};
