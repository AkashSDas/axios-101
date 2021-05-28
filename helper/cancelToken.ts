import axios from "axios";

/**
 * Canceling token on fly
 */
export async function cancelToken() {
  const source = axios.CancelToken.source();

  try {
    const results = await axios.get(
      "https://jsonplaceholder.typicode.com/todos",
      { cancelToken: source.token }
    );

    return results;
  } catch (err) {
    if (axios.isCancel(err)) {
      console.log(`Request cancelled: ${err.message}`);
    } else {
      console.log(err);
    }
  }

  /// If we have some kind of condition and we want to cancel
  /// request then we cancel it
  if (true) {
    source.cancel("Request Cancelled!!!");
  }
}
