import {useEffect, useState} from "react";
import AppRoutes from "../components/AppRoutes.jsx";

const MidSect =()=>{
    const midSection ={
        display:"flex",
        flexDirection:"column",
        flex:"0.8",
        overflow:"scroll",
        scrollBehavior:"smooth",
        scrollWidth:"thin",
        border:"2px solid black",
        height:"90vh",

    }
    // const url =window.location.href
    // const end =url.match(/[^/]+$/)
    // const [location,setLocation] =useState("")
    // const[num,setNum] =useState(0)
    // const getCurrentLocation=()=>{
    //     const url =window.location.href
    //     const end =url.match(/[^/]+$/)
    //
    //     setLocation(end)
    //     setNum(num+1)
    // }
    // useEffect(()=>{
    //     getCurrentLocation()
    // },[1+1])

    return(
        <div className={"mid"} style={midSection}>
            <AppRoutes/>
        </div>
    )
}
export default MidSect