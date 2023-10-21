import { Routes, Route } from "react-router-dom"
import ShopPage from "./shop/home";

import './../index.css';


function App() {
  return (
    <Routes>
      <Route path="/" element={<ShopPage />} />
    </Routes>
  );
}

export default App;
