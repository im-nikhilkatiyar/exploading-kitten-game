import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3131/",
  headers: {
    "Content-type": "application/json"
  }
});