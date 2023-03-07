import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProjectDetail from "./pages/ProjectDetail";
import Projects from "./pages/Projects";
import ProjectList from "./pages/ProjectList";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<ProjectList />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
