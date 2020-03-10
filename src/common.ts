// Generic function to fetch all the data
export const fetchData = async (url: string) => {
  const response = await fetch(url);
  return response.json();
};

export default { fetchData };
