import axios from "../axios";

const handleLoginApi = (userName, passWord) => {
  return axios.post("api/login/", { email: userName, password: passWord });
};
const getAllUsers = (inputId) => {
  return axios.get(`api/get-all-users?id=${inputId}`);
};

const createNewUser = (user) => {
  return axios.post(`api/create-user`, user);
};
export { handleLoginApi, getAllUsers, createNewUser };
