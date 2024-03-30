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

const deleteUser = (userId) => {
  return axios.delete(`api/delete-user`, {
    data: { id: userId },
  });
};

const editUserServices = (userInput) => {
  return axios.put(`api/edit-user`, userInput);
};
export {
  handleLoginApi,
  getAllUsers,
  createNewUser,
  deleteUser,
  editUserServices,
};
