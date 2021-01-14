import { BrowserRouter as Router, Route } from "react-router-dom";
import Spotify from "./pages/SpotifyPage";
import Welcome from "./pages/WelcomePage";
import SignUp from "./pages/SignUpPage";
import './App.css';

function App() {

  return (

    
    <>
      <Router>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/spotify" component={Spotify} />
        <Route exact path="/spotify/#access_token=" component={Spotify} />
      </Router>
    </>
  );
}

export default App;
