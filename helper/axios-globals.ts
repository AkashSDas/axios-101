/**
 * If you've tokens for protection then you've to send that token in
 * the header everytime you make a request, now this can be tedious
 * to include that token in header everytime. This is where axios
 * globals are useful as they allow us to define global only once
 * and then that will be added with every request
 */

import axios from "axios";

axios.defaults.headers.common["X-Auth-Token"] = "sometoken";
