import axios from "axios";

export async function errorHandling() {
  /// Wrong URL path is causing the error

  try {
    const results = await axios.get(
      "https://jsonplaceholder.typicode.com/todosss",
      {
        /// We can limit our catch to certain responses only
        validateStatus: function (status) {
          /// Reject only if status is greater or equal to 500
          return status < 500;
        },
      }
    );

    return results;
  } catch (err) {
    if (err.response) {
      // Server responding with a status code other than 200
      console.log(err.response.data);
      console.log(err.response.status);
      console.log(err.response.headers);

      if (err.response.status === 404) {
        alert("Error: Page Not Found");
      } else if (err.request) {
        // Request was made but not response
        console.error(err.request);
      } else {
        console.error(err.message);
      }
    }
  }
}
