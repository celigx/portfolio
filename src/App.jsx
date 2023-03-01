import { Route, Routes } from "react-router";
import "./App.css";
import ProjectDetail from "./pages/ProjectDetail";
import ProjectList from "./pages/ProjectList";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ProjectList />} />
        <Route path="/:id" element={<ProjectDetail />} />
      </Routes>
    </>
  );
}

export default App;
