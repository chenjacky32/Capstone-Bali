export async function getDestinationResponse(resource, query = "") {
  const response = await fetch(
    `${import.meta.env.VITE_REACT_APP_API_KEY}/${resource}${
      query && "?" + query
    }`
  );
  const destination = await response.json();
  return destination;
}
