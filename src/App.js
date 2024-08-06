import "./App.css";
import CreatePage from "./components/CreatePage";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpdatePage from "./components/UpdatePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/edit/:id" element={<UpdatePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
