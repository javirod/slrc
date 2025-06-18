import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/navbar";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes> 
          <Route path="/" element={<Home />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
