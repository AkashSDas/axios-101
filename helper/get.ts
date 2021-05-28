import axios from "axios";

/**
 * GET Request
 */

/// Using Axios
export async function getTodos() {
  try {
    // const results = await axios({
    //   method: "get",
    //   url: "https://jsonplaceholder.typicode.com/todos",
    //   params: {
    //     _limit: 5,
    //   },
    // });

    // const results = await axios.get(
    //   "https://jsonplaceholder.typicode.com/todos",
    //   {
    //     params: {
    //       _limit: 5,
    //     },
    //   }
    // );

    /// Axios by default will be GET request
    const results = await axios(
      "https://jsonplaceholder.typicode.com/todos?_limit=5"
    );

    console.log(`GET Status: ${results.status}`);
    return results;
  } catch (err) {
    console.log(err);
    return err;
  }
}

/// Using Fetch
// export async function getTodos() {
//   try {
//     const results = await fetch(
//       "https://jsonplaceholder.typicode.com/todos" + "?_limit=5",
//       {
//         method: "get",
//       }
//     );

//     /// todos data
//     const todos = await results.json();

//     return results;
//   } catch (err) {
//     console.log(err);
//     return err;
//   }
// }
