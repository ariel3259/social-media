import { BrowserRouter, Routes, Route } from "react-router-dom"
import {Login} from "../Container/Login/Login";
import { Register } from "../Container/Register/Register";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={<Login />} />
        <Route 
          path="/register"
          element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
