//import "./styles/App.css";
import React, {useState} from "react"
import Homepage from "./pages/homepage/index.js";
import Login from "./pages/login/index.js";
import Playpage from "./pages/playpage/index.js";
import Startpage from "./pages/startpage/index.js";
import Finalscore from "./pages/finalscore/index.js";
import Header from "./Components/header/index.js";
import Footer from "./Components/footer/index.js";
import SearchResultContainer from "./pages/playpage/search.js";
// import Duringplayheader from "./Components/duringplayheader/index.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cartrack from "./pages/cartrack/index.js";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)


  // useeffect to check for token and login if there is one

  return (
    <Router>
      <Header />
      {isLoggedIn ? <p>loggedIn!</p> : <p>not logged in :(</p>}
      <Routes>
        <Route path="/" element={<Cartrack />} />
        <Route path="/login" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/playpage" element={<Playpage isLoggedIn={isLoggedIn}/>} />
        <Route path="/startpage" element={<Startpage />} />
        <Route path="/finalscore" element={<Finalscore />} />
        {/* <Route path="/cartrack" element={<Cartrack />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
