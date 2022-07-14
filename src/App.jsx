import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Login } from "./Container/Login/Login";
import { Register } from "./Container/Register/Register";
import { Home } from "./Container/Home/Home";
import { Profile } from "./Container/Profile/Profile";
import { UserPosts } from "./Container/UserPosts/UserPosts";

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
        <Route 
          path="/home"
          element={<Home />} />
        <Route 
          path="/profile/:idUser"
          element={<Profile />}/>
        <Route 
          path="/post/:username"
          element={<UserPosts />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
