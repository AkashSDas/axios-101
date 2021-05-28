import axios from "axios";

export async function customHeaders() {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "sometoken",
    },
  };

  try {
    const results = await axios.post(
      "https://jsonplaceholder.typicode.com/todos",
      {
        title: "New Title",
        completed: false,
      },
      config
    );

    console.log(`POST Status: ${results.status}`);
    return results;
  } catch (err) {
    console.log(err);
    return err;
  }
}
