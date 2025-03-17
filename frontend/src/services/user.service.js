import api from "./api";
const API_URL = "/user";

const signJwt = async (email, displayName) => {
  return await api.post(`${API_URL}/sign`, {email, displayName});
};

const addUser = async (email, displayName) => {
  return await api.post(`${API_URL}/`, { email, displayName });
};

const UserService = {
  signJwt,
  addUser,
};

export default UserService;