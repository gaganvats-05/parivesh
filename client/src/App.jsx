import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProductOne from "./components/ProductOne";
import ScanImage from "./pages/ScanImage";
import Training from "./pages/Training.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/product/:pid" element={<ProductOne />} />
        <Route path="/scanimage" element={<ScanImage />} />
        <Route path="/training" element={<Training />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
