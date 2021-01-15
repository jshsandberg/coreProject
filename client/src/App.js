import { BrowserRouter as Router, Route } from "react-router-dom";
import Spotify from "./pages/SpotifyPage";
import Welcome from "./pages/WelcomePage";
import Login from "./pages/LoginPage";
import SignUp from "./pages/SignUpPage";
import Home from "./pages/HomePage";
import './App.css';

function App() {

  return (

    
    <>
      <Router>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/spotify" component={Spotify} />
        <Route exact path="/spotify/#access_token=" component={Spotify} />
        <Route exact path="/home" component={Home} />
      </Router>
    </>
  );
}

export default App;
