import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NeogPrc from "./pages/NeogPrc";
import NeogMcr from "./pages/NeogMcr";
import Mcr from "./pages/Mcr";
import CodeSnippets from "./pages/CodeSnippets";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/neogPrc" element={<NeogPrc />} />
        <Route path="/neogMcr" element={<NeogMcr />} />
        <Route path="/mcr" element={<Mcr />} />
        <Route path="/codeSnippets" element={<CodeSnippets />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
