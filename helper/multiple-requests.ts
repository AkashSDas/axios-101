import axios from "axios";

export async function multipleRequests() {
  try {
    const results = await axios.all([
      axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5"),
      axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5"),
    ]);

    console.log(results[0]); /// todos
    console.log(results[1]); /// posts

    /// returning only one result since we can display only one result
    /// using the RESTApiOutput
    return results[1];

    /// To avoid using results[0] [1] and so use the axios.spread
    // return axios
    //   .all([
    //     axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5"),
    //     axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5"),
    //   ])
    //   .then(axios.spread((todos, posts) => posts))
    //   .catch((err) => console.log(err));
  } catch (err) {
    console.log(err);
    return err;
  }
}
