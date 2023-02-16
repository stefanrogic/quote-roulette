const API_URL = "https://api.quotable.io";

export const fetchRandomQuote = () => {
  return fetch(`${API_URL}/random`).then((res) => res.json());
};

export const fetchRandomAuthorQuote = (author) => {
  return fetch(`${API_URL}/random?author=${author}`).then((res) => res.json());
};

export const fetchRandomCategoryQuote = (category) => {
  return fetch(`${API_URL}/random?tags=${category}`).then((res) => res.json());
};

export const fetchAuthors = () => {
  return fetch(`${API_URL}/authors?limit=150`).then((res) => res.json());
};

export const fetchSearchedAuthors = (input) => {
  return fetch(`${API_URL}/search/authors?query=${input}&limit=150`).then((res) => res.json());
};
