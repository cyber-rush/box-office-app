import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Starred from "./pages/Starred";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/starred" element={<Starred />}></Route>
        <Route path="*" element={<div>Page Not Found!!!</div>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
