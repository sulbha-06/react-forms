import "./App.css";
import HomePage from "./Components/Home/HomePage";
import SignUp from "./Components/SignUpForm/SignUp";
import { Routes, Route } from "react-router-dom";
import AddProduct from "./Components/AddProducts/AddProduct";
import EditProduct from "./Components/EditProduct/EditProduct";
import ViewProducts from "./Components/ViewProducts/ViewProducts.jsx";
function App() {
  return (
    <div className="App">
      <HomePage />

      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/edit" element={<EditProduct />} />
        <Route path="/list" element={<ViewProducts />} />
      </Routes>
    </div>
  );
}

export default App;
