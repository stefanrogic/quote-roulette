import "./random.scss";

import { useEffect } from "react";
import { ReactComponent as QuoteLogo } from "../../assets/img/icons/quote-icon.svg";
import { useGetRandomQuote } from "../../hooks/useGetRandomQuote";

const Random = () => {
  const { quote, isLoading, newQuote, setIsLoading } = useGetRandomQuote();

  useEffect(() => {
    newQuote();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="random">
      <button
        className="quote"
        onClick={() => {
          setIsLoading(true);
          newQuote();
        }}
      >
        <QuoteLogo fill={"#ededed"} />
      </button>
      <div className="container">
        {isLoading ? (
          <span style={{ position: "absolute", color: "#ededed" }}>
            <QuoteLogo fill={"#ededed"} />
            LOADING
          </span>
        ) : (
          <>
            <div className="content">
              <p>"{quote.content}"</p>
            </div>

            <div className="author">
              <div className="line" />
              <a href={`#${quote.authorSlug}`} style={{ flex: quote.author.length > 17 ? "4" : "2" }}>
                <h1>{quote.author.toUpperCase()}</h1>
              </a>

              <div className="line" />
            </div>

            <div className="tags">
              {quote.tags.map((tag, key) => (
                <a key={key} href={`#${tag}`}>
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
