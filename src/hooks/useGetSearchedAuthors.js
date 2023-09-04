import { useState } from "react";
import { fetchHistoricalFigure } from "../api/historicalfigures";

export const useGetSearchedAuthors = () => {
  const [author, setAuthor] = useState();

  const getAuthor = (id) => {
    fetchHistoricalFigure(id).then((a) => {
      setAuthor((prev) => (prev = a[0]));
    });
  };

  return { author, setAuthor, getAuthor };
};
