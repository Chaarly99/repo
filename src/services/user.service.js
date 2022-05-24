import http from "../http-common";
class UserService {
  getAll() {
    return http.get("/users");
  }
  get(id) {
    return http.get(`/users/${id}`);
  }
  create(data) {
    return http.post("/users", data);
  }
  update(id, data) {
    return http.put(`/users/${id}`, data);
  }
  delete(id) {
    return http.delete(`/users/${id}`);
  }
  deleteAll() {
    return http.delete(`/users`);
  }
  findByEmail_passwd(data) {
    return http.get(`/users?email=${data.email}&passwd=${data.passwd}`);
  }
}
export default new UserService();