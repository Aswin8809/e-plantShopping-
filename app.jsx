import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing">
      <div className="overlay">
        <h1>Paradise Nursery</h1>
        <button onClick={() => navigate("/plants")}>
          Get Started
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </Router>
  );
}

export default App;
