import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <Routes>
          <Route path='/'></Route>
        </Routes>
        <Home></Home>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
