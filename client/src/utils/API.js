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
    },
    getMaxRatings: function() {
      return axios.post("api/maxRatings");
    },
    addFriend: function(username, friendUsername) {
      return axios.post("api/user/addFriend/" + username, friendUsername);
    },
    getFriends: function(userId) {
      return axios.post("api/user/getFriends/" + userId);
    },
    savePantheon: function(data) {
      return axios.post("api/pantheon", data);
    },
    getPantheon: function(username) {
      return axios.post("api/pantheon/" + username);
    },
    acceptPantheon: function(id, username) {
      return axios.post("api/user/pantheon/" + id, username)
    },
    getActivePantheon: function(id) {
      return axios.post("api/pantheon/creator/" + id);
    },
    startArena: function (item) {
      return axios.post("api/arena", item);
    },
    getArena: function (username) {
      return axios.post("api/arena/find/" + username)
    },
    submitBattle: function (obj, username) {
      return axios.post("api/battle/" + username, obj)
    }
};