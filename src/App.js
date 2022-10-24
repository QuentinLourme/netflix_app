import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Shows from "./pages/Shows";
import MyList from "./pages/MyList";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/shows" element={<Shows />}></Route>
          <Route path="/mylist" element={<MyList />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
