const API_URL = "https://api.quotable.io";

export const fetchRandomQuote = async () => {
  return fetch(`${API_URL}/random`).then((res) => res.json());
};

export const fetchRandomAuthorQuote = async (author) => {
  return fetch(`${API_URL}/random?author=${author}`).then((res) => res.json());
};

export const fetchRandomCategoryQuote = async (category) => {
  return fetch(`${API_URL}/random?tags=${category}`).then((res) => res.json());
};

export const fetchAuthors = async () => {
  return fetch(`${API_URL}/authors?limit=150`).then((res) => res.json());
};

export const fetchSearchedAuthors = async (input) => {
  return fetch(`${API_URL}/search/authors?query=${input}&limit=150`).then((res) => res.json());
};

export const fetchExactQuote = async (id) => {
  return fetch(`${API_URL}/quotes/${id}`).then((res) => res.json());
};
