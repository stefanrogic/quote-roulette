import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetRandomQuote } from "../../hooks/useGetRandomQuote";

const ExactQuote = () => {
  const { id } = useParams();
  const { quote, exactQuote } = useGetRandomQuote();

  useEffect(() => exactQuote(id), []);

  return <div style={{ color: "white" }}>{quote?.content}</div>;
};

export default ExactQuote;
