import "./random.scss";

import { useEffect, useState } from "react";
import { ReactComponent as QuoteLogo } from "../../assets/img/icons/quote-icon.svg";
import { AnimatePresence, animate, motion } from "framer-motion";

const Random = ({ onQuote, onIsLoading, onNewQuote, onNewAuthorQuote, onSetIsLoading, onNewCategoryQuote }) => {
  const [firstVisit, setFirstVisit] = useState(localStorage.getItem("firstVisit") || true);

  useEffect(() => onNewQuote(), []);

  const handlePopup = () => {
    setFirstVisit(false);
    localStorage.setItem("firstVisit", JSON.stringify(false));
  };

  return (
    <motion.div className="random" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="container">
        <motion.div className="top" initial={{ opacity: 0 }} animate={{ opacity: 1, scale: [1, 2, 1] }} transition={{ duration: 0.5 }}>
          <AnimatePresence>
            {JSON.parse(firstVisit) && (
              <motion.div className="tip" initial={{ opacity: 0 }} animate={{ scale: [1, 2, 1], opacity: [0, 1, 1] }} exit={{ scale: 0, opacity: 0 }} transition={{ duration: 0.5, delay: 1.5 }} onClick={handlePopup}>
                <div className="arrow"></div>
                <p>Click to generate new quote</p>
              </motion.div>
            )}
          </AnimatePresence>
          <motion.button
            className="quote"
            onClick={() => {
              onSetIsLoading(true);
              onNewQuote();
            }}
            onMouseEnter={handlePopup}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <QuoteLogo fill={"#ededed"} />
          </motion.button>
        </motion.div>

        <AnimatePresence>
          {onIsLoading ? (
            <span>
              <QuoteLogo fill={"#ededed"} />
              LOADING
            </span>
          ) : (
            <>
              <motion.div className="content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
                <p>"{onQuote.content}"</p>
              </motion.div>

              <motion.div className="author" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
                <div className="line" />

                <a href={`#${onQuote.authorSlug}`}>
                  <h1 onClick={(e) => onNewAuthorQuote(e.target.textContent)}>{onQuote.author.toUpperCase()}</h1>
                </a>

                <div className="line" />
              </motion.div>

              <motion.div className="tags" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, delay: 1 }}>
                {onQuote.tags.map((tag, key) => (
                  <a key={key} href={`#${tag}`} onClick={(e) => onNewCategoryQuote(e.target.textContent.substring(1))}>
                    #{tag}
                  </a>
                ))}
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Random;
