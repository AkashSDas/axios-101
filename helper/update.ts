/**
 * PUT / PATCH
 *
 * So the big difference between PUT & PATCH is that PUT request
 * is meant to replace the entire resource while PATCH is meant to
 * update parts of the resource
 */

import axios from "axios";

export async function updateTodos() {
  try {
    // const results = await axios.put(
    //   "https://jsonplaceholder.typicode.com/todos/1",
    //   {
    //     title: "Updated Todo",
    //     completed: true,
    //   }
    // );

    const results = await axios.patch(
      "https://jsonplaceholder.typicode.com/todos/1",
      {
        title: "Updated Todo",
        completed: true,
      }
    );

    console.log(`Update Status: ${results.status}`);
    return results;
  } catch (err) {
    console.log(err);
    return err;
  }
}
