import "./random.scss";

import { useEffect, useState } from "react";
import { ReactComponent as QuoteLogo } from "../../assets/img/icons/quote-icon.svg";
import { AnimatePresence, motion } from "framer-motion";
import { fetchRandomQuote } from "../../api/quotable";
import { useGetRandomQuote } from "../../hooks/useGetRandomQuote";

import ReplayIcon from "@mui/icons-material/Replay";
import RedditIcon from "@mui/icons-material/Reddit";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

const Random = () => {
  const { quote, isLoading, newQuote, newAuthorQuote, newCategoryQuote, setIsLoading } = useGetRandomQuote();
  const [firstVisit, setFirstVisit] = useState(localStorage.getItem("firstVisit") || true);
  const [reload, setReload] = useState(false);

  useEffect(() => newQuote(), []);

  const handlePopup = () => {
    setFirstVisit(false);
    localStorage.setItem("firstVisit", JSON.stringify(false));
  };

  return (
    <motion.div className="random" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <motion.div className="container" transition={{ duration: 1 }}>
        <motion.div className="top">
          <AnimatePresence>
            {JSON.parse(firstVisit) && (
              <>
                <motion.div className="tip one" initial={{ x: "100%", opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: "100%", opacity: 0 }} transition={{ duration: 0.7, delay: 1.5 }} onClick={handlePopup}>
                  <div className="arrow"></div>
                  <p>Click to generate new quote</p>
                </motion.div>
              </>
            )}
          </AnimatePresence>

          <motion.button
            className="quote"
            onClick={() => {
              setIsLoading(true);
              newQuote();
            }}
            onMouseEnter={() => {
              setReload(true);
              handlePopup();
            }}
            onMouseLeave={() => setReload(false)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            {reload ? <ReplayIcon style={{ color: "#ededed", width: "60px", height: "60px" }} /> : <QuoteLogo fill={"#ededed"} />}
          </motion.button>
        </motion.div>

        <AnimatePresence>
          {isLoading ? (
            <span>
              <QuoteLogo fill={"#ededed"} />
              LOADING
            </span>
          ) : (
            <>
              <motion.div className="content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
                <p>"{quote.content}"</p>
              </motion.div>

              <motion.div className="author" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
                <div className="line" />

                <h1
                  onClick={(e) => {
                    setIsLoading(true);
                    newAuthorQuote(e.target.textContent);
                  }}
                >
                  {quote.author.toUpperCase()}
                </h1>

                <div className="line" />
              </motion.div>

              <motion.div className="tags" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, delay: 1 }}>
                {quote.tags.map((tag, key) => (
                  <p
                    key={key}
                    onClick={(e) => {
                      setIsLoading(true);
                      newCategoryQuote(e.target.textContent.substring(1));
                    }}
                  >
                    #{tag}
                  </p>
                ))}
              </motion.div>

              <motion.div className="share" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, delay: 1.5 }}>
                <motion.a
                  href={`http://twitter.com/share?text=I feel so inspired...&url=https://quote-roulette.netlify.app/${quote?._id}&hashtags=${quote.tags.map((tag) => tag)}`}
                  target="_blank"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div className="link twitter">
                    <TwitterIcon style={{ color: "white", fontSize: "20px" }} />
                  </div>
                </motion.a>

                <motion.a href={`https://www.facebook.com/sharer/sharer.php?u=#https://quote-roulette.netlify.app/${quote?._id}`} target="_blank" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                  <div className="link facebook">
                    <FacebookIcon style={{ color: "white", fontSize: "20px" }} />
                  </div>
                </motion.a>

                <motion.a href={`http://www.reddit.com/submit?url=https://quote-roulette.netlify.app/${quote?._id}&title=Daily%20Quote`} target="_blank" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                  <div className="link reddit">
                    <RedditIcon style={{ color: "white", fontSize: "20px" }} />
                  </div>
                </motion.a>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default Random;
