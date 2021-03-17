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
import ActivePantheonPage from "./pages/ActivePantheonPage";
import ArenaPage from "./pages/ArenaPage";
import VotingPage from "./pages/VotingPage";
import ResultsPage from "./pages/ResultsPage";
import FinalArenaPage from "./pages/FinalArenaPage";
import FinalResultsPage from "./pages/FinalResultsPage";


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
              const modifiedUser = {
                email: newUser.data.email,
                friend: newUser.data.friend,
                name: newUser.data.name,
                pantheon: newUser.data.pantheon,
                password: newUser.data.password,
                reviews: newUser.data.reviews,
                id: newUser.data._id,
                username: newUser.data.username
              }
              await setUser(modifiedUser);
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
              <Route exact path="/activePantheon" component={ActivePantheonPage} />
              <Route exact path="/arena" component={ArenaPage} />
              <Route exact path="/voting" component={VotingPage} />
              <Route exact path="/results" component={ResultsPage} />
              <Route exact path="/finalArena" component={FinalArenaPage} />
              <Route exact path="/finalResults" component={FinalResultsPage} />
              </UserContext.Provider>
          </Router>
        </>
      );
      
 }

export default App;
