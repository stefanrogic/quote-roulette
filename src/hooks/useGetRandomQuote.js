import { useState } from "react";
import { fetchRandomQuote } from "../api/fetchRandomQuote";

export const useGetRandomQuote = () => {
  const [quote, setQuote] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const newQuote = () => {
    fetchRandomQuote()
      .then((q) => {
        setQuote(q);
      })
      .then(() => setIsLoading(false));
  };

  return { quote, isLoading, newQuote, setIsLoading };
};
