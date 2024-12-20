import {Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import DashBoard from "../pages/DashBoard.jsx";
import Expenditure from "../pages/Expenditure.jsx";
import Income from "../pages/Income.jsx";
import Loans from "../pages/Loans.jsx";
import Savings from "../pages/Savings.jsx";
import Budget from "../pages/Budget.jsx";
import Transactions from "../pages/Transactions.jsx";

const AppRoutes=()=>{
    return(
        <div>
            <Routes>
                <Route path={"/dashboard"} element={<DashBoard/>}/>
                <Route path={"/expenditure"} element={<Expenditure/>}/>
                <Route path={"/income"} element={<Income/>}/>
                <Route path={"/loans"} element={<Loans/>}/>
                <Route path={"/savings"} element={<Savings/>}/>
                <Route path={"/budget"} element={<Budget/>}/>
                <Route path={"/transactions"} element={<Transactions/>}/>
                <Route path={"/budget"} element={<Budget/>}/>
            </Routes>

        </div>
    )
}
export default AppRoutes