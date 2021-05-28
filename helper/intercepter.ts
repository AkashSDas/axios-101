import axios from "axios";

/**
 * Intercepting requests and response
 * Here consoling every axios action - logger for request sent using axios
 */
axios.interceptors.request.use(
  (config) => {
    console.log(
      `${config.method.toUpperCase()} request sent to ${
        config.url
      } at ${new Date().getTime()}`
    );
    return config;
  },
  (error) => Promise.reject(error)
);

export default {};
