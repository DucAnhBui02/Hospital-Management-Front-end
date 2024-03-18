import axios from "../axios";

const userServices = (userName, passWord) => {
  return axios.post("api/login/", { email: userName, password: passWord });
};

export default userServices;
