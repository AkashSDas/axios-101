import axios from "axios";

export async function postTodos() {
  try {
    // const results = await axios({
    //   method: "post",
    //   url: "https://jsonplaceholder.typicode.com/todos",
    //   data: {
    //     title: "New Title",
    //     completed: false,
    //   },
    // });

    const results = await axios.post(
      "https://jsonplaceholder.typicode.com/todos",
      {
        title: "New Title 2",
        completed: false,
      }
    );

    console.log(`POST Status: ${results.status}`);
    return results;
  } catch (err) {
    console.log(err);
    return err;
  }
}
