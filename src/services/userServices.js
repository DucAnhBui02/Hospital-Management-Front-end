import axios from "../axios";

const handleLoginApi = (userName, passWord) => {
  return axios.post("api/login/", { email: userName, password: passWord });
};
const getAllUsers = (inputId) => {
  return axios.get(`api/get-all-users?id=${inputId}`);
};
export { handleLoginApi, getAllUsers };
