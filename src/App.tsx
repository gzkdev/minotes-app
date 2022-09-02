import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notes/:id" element={<h1>Edit Note</h1>} />
        <Route path="/favorites" element={<h1>Favorite Notes</h1>} />
        <Route path="/recent" element={<h1>Recent Notes</h1>} />
        <Route path="/trash" element={<h1>deleted Notes</h1>} />
        <Route path="*" element={<h1>404 Page</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
