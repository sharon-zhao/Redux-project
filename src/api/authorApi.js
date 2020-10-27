import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/authors/";
//use fetch to make api calls, it is built into modern browsers, so we 
//can make api calls without installing the extra library
export function getAuthors() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}
