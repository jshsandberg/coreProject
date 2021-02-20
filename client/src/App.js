import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";
import Spotify from "./pages/SpotifyPage";
import Welcome from "./pages/WelcomePage";
import Login from "./pages/LoginPage";
import SignUp from "./pages/SignUpPage";
import Home from "./pages/HomePage";
import Review from "./pages/ReviewPage"
import { UserContext } from "./context/userContext";
import API from "./utils/API";
import AuthTokenModal from "./components/Modal/AuthTokenModal";
import Media from "./pages/MediaPage";
import Challenge from "./pages/ChallengePage"
import WriteReview from "./pages/WriteReviewPage";
import './App.css';
import ProfilePage from "./pages/ProfilePage";
import FriendsPage from "./pages/FriendsPage";
import PantheonPage from "./pages/PantheonPage";

function App() {

  const history = useHistory();

  const [user, setUser] = useState(null);





  useEffect(() => {
    
    const jwt = require("jsonwebtoken");


    const isUserAuth = async () => {
      try {
        let token = localStorage.getItem("auth-token");
        if (token !== undefined) {
          const decoded = jwt.verify(token, "secret");      
            try {
              const newUser = await API.getUserbyId(decoded.id);
              await setUser(newUser.data);
            } catch(err) {
              console.log(err)
              }
          } else {
            await setUser(null)
          }
        } catch (err) {
          await setUser(null);
        }
      }

      isUserAuth();

  }, [])


  
  
      return (
        <>
          <Router>
            <UserContext.Provider value={{ user, setUser }}>
              <Route exact path="/" component={Welcome} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/spotify" component={Spotify} />
              <Route exact path="/home/#access_token=" component={Home} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/review/:name" component={Review} />
              <Route exact path="/media" component={Media} />
              <Route exact path="/challenge" component={Challenge} />
              <Route exact path="/writereview/:name" component={WriteReview} />
              <Route exact path="/profile" component={ProfilePage} />
              <Route exact path="/friends" component={FriendsPage} />
              <Route exact path="/pantheon" component={PantheonPage} />
              <button onClick={() => console.log(user)}></button>
              </UserContext.Provider>
          </Router>
        </>
      );
      
 }

export default App;
