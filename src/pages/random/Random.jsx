import "./random.scss";

import { useEffect, useState } from "react";
import { fetchRandomQuote } from "../../api/fetchRandomQuote";

const Random = () => {
  const [quote, setQuote] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchRandomQuote().then((q) => {
      setQuote(q);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="random">
      {isLoading ? (
        <h1>loading</h1>
      ) : (
        <div className="container">
          <h2>{quote.author}</h2>
          <p>{quote.content}</p>
          {quote.tags.map((tag, key) => (
            <p key={key}>{tag}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Random;
