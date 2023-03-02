import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/Register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
