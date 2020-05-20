export const fetchListings = () => {
  return fetch("https://vrad-api.herokuapp.com/api/v1/listings/")
  .then((response) => response.json())
}
