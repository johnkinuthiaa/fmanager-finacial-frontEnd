
import './App.css'
import {Route, Routes} from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

function App() {


  return (
    <>
        <Routes>
          <Route path={"/"} element={<LandingPage/>}/>
          <Route path={"/login"} element={<Login/>}/>
          <Route path={"/register"} element={<Register/>}/>
        </Routes>
    </>
  )
}

export default App
