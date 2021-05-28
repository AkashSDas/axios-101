import axios from "axios";

export async function instance() {
  try {
    /// Very useful for baseURL's
    const axiosInstance = axios.create({
      /// We can also have other custom settings
      baseURL: "https://jsonplaceholder.typicode.com",
    });

    const results = await axiosInstance.get("/todos");

    return results;
  } catch (err) {
    console.log(err);
  }
}
