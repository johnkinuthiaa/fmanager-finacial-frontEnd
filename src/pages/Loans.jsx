import {useEffect, useState} from "react";

const Loans =()=>{
    const userId =1
    const[loanLimit,setLoanLimit] =useState(0)
    const loansContainer ={
        margin:"100px auto",
        color:"rgb(0,0,0)",
        display:"flex",
        width:"80%",
        justifyContent:"center",
        flexDirection:"column",
        alignItems:"center"
    }

    useEffect(()=>{
        getLoanLimit()
    },[])
    const getLoanLimit =(async ()=>{
        const response =await fetch(`http://localhost:8080/api/v1/auth/get/user?userId=${userId}`)
        const data =await response.json()
        setLoanLimit(data.user.loanLimit)
    })

    return(
        <div className={"loans"} style={loansContainer}>
            <h1 style={{ color:"rgb(0,0,0)"}}>Loans</h1>
            <p>your loan limit is Ksh {loanLimit}</p>
        </div>
    )
}
export default Loans