import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./components/ToolCard";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import JsonFormatter from "./pages/JsonFormatter";
import QRGenerator from "./pages/QRGenerator";
import MarkdownEditor from "./pages/MarkdownEditor";
import PasswordGenerator from "./pages/PasswordGenerator";
import ColorPalette from "./pages/ColorPalette";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col">
      <Navbar />

      <main className="flex-1 container mx-auto px-4 py-8">
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          <Route
            path="/json-formatter"
            element={<JsonFormatter />}
          />

          <Route
            path="/qr-generator"
            element={<QRGenerator />}
          />

          <Route
            path="/markdown-editor"
            element={<MarkdownEditor />}
          />

          <Route
            path="/password-generator"
            element={<PasswordGenerator />}
          />

          <Route
            path="/color-palette"
            element={<ColorPalette />}
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;