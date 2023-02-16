import "./random.scss";

import { useEffect } from "react";
import { ReactComponent as QuoteLogo } from "../../assets/img/icons/quote-icon.svg";

const Random = ({ onQuote, onIsLoading, onNewQuote, onNewAuthorQuote, onSetIsLoading, onNewCategoryQuote }) => {
  useEffect(() => onNewQuote(), []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="random">
      <button
        className="quote"
        onClick={() => {
          onSetIsLoading(true);
          onNewQuote();
        }}
      >
        <QuoteLogo fill={"#ededed"} />
      </button>
      <div className="container">
        {onIsLoading ? (
          <span>
            <QuoteLogo fill={"#ededed"} />
            LOADING
          </span>
        ) : (
          <>
            <div className="content">
              <p>"{onQuote.content}"</p>
            </div>

            <div className="author">
              <div className="line" />

              <a href={`#${onQuote.authorSlug}`}>
                <h1 onClick={(e) => onNewAuthorQuote(e.target.textContent)}>{onQuote.author.toUpperCase()}</h1>
              </a>

              <div className="line" />
            </div>

            <div className="tags">
              {onQuote.tags.map((tag, key) => (
                <a key={key} href={`#${tag}`} onClick={(e) => onNewCategoryQuote(e.target.textContent.substring(1))}>
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
