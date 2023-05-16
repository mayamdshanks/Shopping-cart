import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Filter from "./components/Filter";
function App() {
  return (
    
    <BrowserRouter>
      <Header />
      <Filter />
      

      <div>
        <Routes>
          <Route path="/" exact element={<Home />} />

          <Route path="/cart" exact element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
