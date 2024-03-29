import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./pages/navbar";
import Home from "./pages/home";
import About from "./pages/about";
import TechStack from "./pages/tech-stack";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
function App() {
  return (
    <div className="bg-zinc-400 text-white  min-h-screen max-h-full p-2">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/stack" element={<TechStack />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
