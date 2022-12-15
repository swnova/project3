import "./App.css";
import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from "./pages/homepage/index.js";
import Login from "./pages/login";
import Playpage from "./pages/playpage/index.js";
import Startpage from "./pages/startpage/index.js";
import Registerpage from "./pages/registerpage/index.js";
import Finalscore from "./pages/finalscore/index.js";
import InfoModal from "./pages/infomodal/index.js";
import ForgotPass from "./pages/forgotpass/index.js";
import Header from "./Components/header/index.js";
import Footer from "./Components/footer/index.js";
import PlayerCard from "./pages/playercard/index.js";
import SearchResultContainer from "./pages/playpage/search.js";
// import Duringplayheader from "./Components/duringplayheader/index.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cartrack from "./pages/cartrack/index.js";
import Api from "./utils/api";
import API from "./utils/apilogin.js";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(()=>{
    const playerName = localStorage.getItem("playerName")
    if(playerName==""){
      console.log("Not logged in")
    } else {
      console.log("Logged in")
      setIsLoggedIn(true)

    }
  },[])
  

  const handleLoginSubmit = userObj=>{
    API.login(userObj).then(data=>{
      if(data.token){
        setIsLoggedIn(true)
        localStorage.setItem("token",data.token)
        localStorage.setItem("playerName", data.player.playerName);
        localStorage.setItem("email", data.player.email);
        localStorage.setItem("playerLvl", data.player.playerLvl);
        alert("Login successful");
        window.location.href = '/startpage'
      }else {
        console.log('no stored token')
        alert("Please check your username and password");
      }
    })
  }

  const handleSignupSubmit = userObj=>{
    API.signup(userObj).then(data=>{
      console.log(data);
      if(data.token){
        alert("Successfully registered, Please Login.");
        window.location.href = "/login"
      }
      else{
        alert("Error, Please try again.");
      }
    })
  }

  const handleLogout = () =>{
    setIsLoggedIn(false);
    localStorage.setItem("token","")
    localStorage.setItem("playerName", "");
    localStorage.setItem("email","");
    localStorage.setItem("playerLvl", "");
  }

  // useeffect to check for token and login if there is one

  return (
    <Router>
      <Header  handleLogout={handleLogout}/>
      <Routes>
        <Route path="/" element={<Cartrack />} />
        <Route path="/login" element={<Login handleLoginSubmit={handleLoginSubmit}/>}/>
        <Route path="/playpage" element={<Playpage/>}/>
        <Route path="/startpage" element={<Startpage />} />
        <Route path="/registerpage" element={<Registerpage handleSignupSubmit={handleSignupSubmit} />} />
        <Route path="/finalscore" element={<Finalscore />} />
        <Route path="/infomodal" element={<InfoModal />} />
        <Route path="/forgotpass" element={<ForgotPass />} />
        <Route path="/playercard" element={<PlayerCard />} />
        {/* <Route path="/cartrack" element={<Cartrack />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
