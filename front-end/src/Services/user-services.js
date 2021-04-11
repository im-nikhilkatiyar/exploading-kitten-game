import http from "../http-common";

const create = data => {
  return http.post("/user", data);
}

const getAll = () => {
  return http.get("/users");
};

export default {
  create,
  getAll
};