const API_URL = "https://api.quotable.io";

export const fetchRandomQuote = () => {
  return fetch(`${API_URL}/random`).then((res) => res.json());
};
