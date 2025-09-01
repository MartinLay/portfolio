import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PortfolioYoseph from "@/PortfolioYoseph"; 
import ProjectDetail from "./ProjectDetail";
import Layout from "./Layout";
import { ThemeProvider } from "./ThemeContext"; // Import ThemeProvider
import "./output.css";

export default function App() {
  return (
    <ThemeProvider> {/* Bungkus seluruh aplikasi dengan ThemeProvider */}
      <Router basename="/portfolio">
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <PortfolioYoseph />
              </Layout>
            }
          />
          <Route
            path="/project/:slug"
            element={
              <Layout>
                <ProjectDetail />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}