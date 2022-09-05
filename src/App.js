// import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SigupForm from "./Components/Auth/SigupForm";
import NavBar from "./Components/NavBar/Navbar";


function App() {
  const addProduct = (products) => {
    console.log("App.js", products);
  };
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/login" element={<SigupForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
