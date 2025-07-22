import { Route, Routes } from "react-router-dom";
import { Login } from "./Components/Login/Login";
import { Product } from "./Components/Products/Products";
import { Singlepro } from "./Components/Singlepro/Singlepro";
import Notfound from "./Components/Notfound";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<Singlepro />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
