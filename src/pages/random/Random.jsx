import "./random.scss";

import { useEffect, useState } from "react";
import { fetchRandomQuote } from "../../api/fetchRandomQuote";
import { ReactComponent as QuoteLogo } from "../../assets/img/icons/quote-icon.svg";

const Random = () => {
  const [quote, setQuote] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchRandomQuote().then((q) => {
      setQuote(q);
      setIsLoading(false);
    });
  }, [isLoading]);

  return (
    <div className="random">
      <button
        className="quote"
        onClick={() => {
          setIsLoading(true);
        }}
      >
        <QuoteLogo fill={"#ededed"} />
      </button>
      <div className="container">
        {isLoading ? (
          <h1 style={{ position: "absolute", color: "#ededed" }}>Loading...</h1>
        ) : (
          <>
            <div className="content">
              <p>"{quote.content}"</p>
            </div>

            <div className="author">
              <div className="line" />

              <h1 style={{ flex: quote.author.length > 15 ? "4" : "2" }}>{quote.author.toUpperCase()}</h1>

              <div className="line" />
            </div>

            <div className="tags">
              {quote.tags.map((tag, key) => (
                <a key={key} href="#">
                  #{tag}
                </a>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Random;
