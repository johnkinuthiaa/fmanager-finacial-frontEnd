import "./styles/sidebar.css"
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import SendIcon from '@mui/icons-material/Send';
import WalletIcon from '@mui/icons-material/Wallet';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import SavingsIcon from '@mui/icons-material/SavingsOutlined';
import AddCardIcon from '@mui/icons-material/AddCard';
import TocIcon from '@mui/icons-material/Toc';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import WidgetsIcon from '@mui/icons-material/Widgets';
import {useEffect, useState} from "react";
import SidebarCard from "./SidebarCard.jsx";
import {useLocation} from "react-router-dom";
const SideBar =()=>{
    const [userDetails,setUserDetails] =useState("")
    const location =useLocation()
    const [selectedKeys,setSelectedKeys] =useState("/home")

    const fetchData =(async ()=>{
        const response =await fetch("http://localhost:8080/api/v1/auth/get/user?userId=1")
        if(response.ok){
            const data =await response.json()
            setUserDetails(data.user)

        }else{
            console.log("network error")
        }

    })
    useEffect(()=>{
        const pathname =location.pathname
        setSelectedKeys(pathname)
    },[location.pathname])
    useEffect(()=>{
        fetchData()
    },[])
    const[collapsed,setCollapsed] =useState(false)
    const sideBar ={
        display:"flex",
        height:"100%",
        backgroundColor:"rgb(247,247,255)"

    }
    return(
        <div className={"sidebar"} style={sideBar}>
            <div className={"sidebar__container"} style={{width:"100%"}}>
                <div className={"profile__card"} style={{
                    display:"flex",
                    justifyContent:"space-between",
                    alignItems:"center",
                    border:"1px solid rgb(125, 136, 151)",
                    padding:"10px",
                    width:"95%",
                    borderRadius:"15px",
                    backgroundColor:"#ffffff"

                }}>
                    <div style={{display:"flex",alignItems:"center"}}>
                        <img src={"https://i.pinimg.com/236x/ff/f5/15/fff515feeac0de5f8138941afd1cd6c9.jpg"}
                             alt={"profile image"}
                             style={{height: "45px", width: "45px", borderRadius: "50px"}}
                        />
                        <h3 style={{marginLeft:"10px"}}>{userDetails.username}</h3>
                    </div>
                    <p><KeyboardArrowDownIcon/></p>

                </div>
                <SidebarCard text={"dashboard"} icon={<WidgetsIcon/>} color={"rgb(18, 48, 174)"} to={"/dashboard"}/>
                <SidebarCard text={"Wallet"} icon={<WalletIcon/>} />
                <SidebarCard text={"budget"} icon={<TocIcon/>} to={"/budget"}/>
                <SidebarCard text={"Transactions"} icon={<SendIcon/>} to={"/transactions"}/>
                <SidebarCard text={"Loans"} icon={<CreditScoreIcon/>} to={"/loans"}/>
                <SidebarCard text={"Savings"} icon={<SavingsIcon/>} to={"/savings"}/>
                <SidebarCard text={"Expenditure"} icon={<AttachMoneyOutlinedIcon/>} to={"/expenditure"}/>
                <SidebarCard text={"Incomes"} icon={<CurrencyExchangeOutlinedIcon/>} to={"income"}/>

            </div>
        </div>
    )
}
export default SideBar