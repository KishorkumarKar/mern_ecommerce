//import axios from "axios";

class AuthService {
  //   login(username, password) {
  //     return axios
  //       .post(API_URL + "signin", {
  //         username,
  //         password,
  //       })
  //       .then((response) => {
  //         if (response.data.accessToken) {
  //           localStorage.setItem("user", JSON.stringify(response.data));
  //         }

  //         return response.data;
  //       });
  //   }

  setUserDetails(data) {
    localStorage.setItem("user", JSON.stringify(data));
  }

  logout() {
    localStorage.removeItem("user");
  }

  //   register(username, email, password) {
  //     return axios.post(API_URL + "signup", {
  //       username,
  //       email,
  //       password,
  //     });
  //   }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }

  isLoggedIn() {
    const user = this.getCurrentUser();
    if (user) {
      return true;
    }
    return false;
  }
}

export default new AuthService();
