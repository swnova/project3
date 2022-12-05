import "./styles/App.css";
import homepage from "./pages/homepage";
import login from "./pages/login";
import playpage from "./pages/playpage";
import finalscore from "./pages/finalscore";
import Header from "./components/Header";
import Footer from "./components/Footer";
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
