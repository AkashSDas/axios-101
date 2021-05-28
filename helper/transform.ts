/**
 * Transform requests and responses
 */

import axios, { AxiosTransformer } from "axios";

export async function transform() {
  const transformResponse = axios.defaults
    .transformResponse as AxiosTransformer[];

  const results = await axios({
    method: "post",
    url: "https://jsonplaceholder.typicode.com/todos",
    data: {
      title: "New Title",
      completed: false,
    },
    transformResponse: transformResponse.concat((data) => {
      data.title = data.title.toUpperCase();
      return data;
    }),
  });
  return results;
}
