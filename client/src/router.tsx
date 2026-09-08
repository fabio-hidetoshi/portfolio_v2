import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ProjectDetailPage } from "./pages/ProjectDetailPage";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projetos/:slug" element={<ProjectDetailPage />} />
    </Routes>
  );
}
