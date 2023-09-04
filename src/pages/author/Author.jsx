import "./author.scss";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetSearchedAuthors } from "../../hooks/useGetSearchedAuthors";

const Author = () => {
  const { id } = useParams();

  const { author, getAuthor } = useGetSearchedAuthors();

  useEffect(() => getAuthor(id), []);

  return <div>{JSON.stringify(author)}</div>;
};

export default Author;
