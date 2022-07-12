import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./components/Home";
import About from "./components/About";
import PageNotFound from "./components/PageNotFound";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
