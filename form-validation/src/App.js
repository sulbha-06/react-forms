import "./App.css";
import HomePage from "./Components/Home/HomePage";
import SignUp from "./Components/SignUpForm/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddProduct from "./Components/AddProducts/AddProduct";
import EditProduct from "./Components/EditProduct/EditProduct";
function App() {
  return (
    <div className="App">
      {/* <header className="App-header"></header> */}

      <Router>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/edit" element={<EditProduct />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
