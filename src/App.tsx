import PageLayout from "./components/PageLayout";
import { About, Contact, ErrorPage, Home, Projects, Work } from "./routes";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="projects" element={<Projects />} />
        <Route path="work" element={<Work />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}
