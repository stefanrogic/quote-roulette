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
  }, []);

  return (
    <div className="random">
      <div className="quote">
        <QuoteLogo fill={"#171717"} />
      </div>
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

              <h1>{quote.author.toUpperCase()}</h1>

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
