
import './App.css'
import {Route, Routes} from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx";
import HomePage from "./pages/HomePage.jsx";
import DashBoard from "./pages/DashBoard.jsx";
import Expenditure from "./pages/Expenditure.jsx";
import Income from "./pages/Income.jsx";
import Loans from "./pages/Loans.jsx";
import Savings from "./pages/Savings.jsx";
import Budget from "./pages/Budget.jsx";
import Transactions from "./components/Transactions.jsx";
import SendMoneyPage from "./pages/SendMoneyPage.jsx";
import ErrorPage from "./pages/404ErrorPage.jsx";


function App() {


  return (
    <>
        <Routes>
            <Route path={"/dashboard"} element={<DashBoard/>}/>
            <Route path={"/expenditure"} element={<Expenditure/>}/>
            <Route path={"/income"} element={<Income/>}/>
            <Route path={"/loans"} element={<Loans/>}/>
            <Route path={"/savings"} element={<Savings/>}/>
            <Route path={"/budget"} element={<Budget/>}/>
            <Route path={"/transactions"} element={<Transactions/>}/>
            <Route path={"/budget"} element={<Budget/>}/>
            <Route path={"/"} element={<LandingPage/>}/>
            <Route path={"/home"} element={<HomePage/>}/>
            <Route path={"/register"} element={<Register/>}/>
            <Route path={"/login"} element={<Login/>}/>
            <Route path={"/send"} element={<SendMoneyPage/>}/>
            <Route path={"/**"} element={<ErrorPage/>}/>
        </Routes>
    </>
  )
}

export default App
