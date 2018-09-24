export const fetchDayEvent = () => {
  const endpoint = `https://sheltered-bayou-48245.herokuapp.com`;

  return fetch(endpoint)
    .then(res => res.json())
    .then(data => {
      return data;
    });
};
