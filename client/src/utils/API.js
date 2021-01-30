import axios from "axios";

export default {
  
    saveuser: function(user) {
      return axios.post("/api/user/register", user);
    },
    loginUser: function(loginData) {
      return axios.post("/api/user/login", loginData);
    },
    getUserbyId: function(id) {
      return axios.post("/api/user/" + id);
    },
    saveReview: function(user, review) {
      return axios.post("/api/user/review/" + user, review);
    },
    getReview: function(id) {
      return axios.post("/api/user/mediaReview/" + id);
    }
};