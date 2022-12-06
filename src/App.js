//import "./styles/App.css";
import Homepage from "./pages/homepage";
import Login from "./pages/login";
import Playpage from "./pages/playpage";
import Finalscore from "./pages/finalscore";
import Header from "./Components/header/index.js";
import Footer from "./Components/footer/index.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/playpage" element={<Playpage />} />
        <Route path="/finalscore" element={<Finalscore />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
