const API_URL = "https://api.api-ninjas.com/v1/historicalfigures?name=";
const API_KEY = "rVU95Ezg0pV2J/WZdnXTLQ==MFsVE41y9eo9mPUD";

export const fetchHistoricalFigure = async (input) => {
  return fetch(`${API_URL}${input}`, { headers: { "X-Api-Key": API_KEY } }).then((res) => res.json());
};
