import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost/api",
});

function createHeaders() {
  const userData = JSON.parse(localStorage.getItem("RB_UserData"));

  if (userData) {
    const config = {
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    };
    return config;
  }
}

export { api, createHeaders };
