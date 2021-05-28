import axios from "axios";

export async function deleteTodos() {
  try {
    const results = await axios.delete(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    console.log(`DELETE Status: ${results.status}`);
    return results;
  } catch (err) {
    console.log(err);
    return err;
  }
}
