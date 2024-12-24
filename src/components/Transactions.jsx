import {useEffect, useState} from "react";

const Transactions =()=>{
    const[transactionDone,setTransactions] =useState([])
    useEffect(() => {
        fetchTransactions()
    }, []);
    const fetchTransactions =(async ()=>{

        const userId =1
        const response = await fetch(`http://localhost:8080/api/v1/transactions/by/userId?userId=${userId}`)
        const data =await response.json()
        setTransactions(data.transactions)

    })

    const transactionsStyle = {
        margin:"10px auto",
        width:"80%",
        display:"flex",
        flexDirection:"column",
        alignContent:"center",
        justifyContent:"center",
        backgroundColor:"whiteSmoke",
        overflow:"scroll",
        scrollBehavior:"smooth",
        scrollWidth:"thin"
    }
    return(
        <div style={transactionsStyle}>
            {transactionDone.map((trans)=>(
                <div style={{display:"flex",gap:"20px",padding:"10px",justifyContent:"flex-start"}}>
                    <p style={{width:"340px"}}>{trans.transactionType}</p>
                    <p>{trans.senderId.toString().substring(0,8)}...</p>
                    <p>{trans.receiverId.toString().substring(0,8)}...</p>
                    <p>{trans.transactionId.toString().substring(0,8)}...</p>
                    <p>{trans.amount}</p>
                    <p>{trans.transactionTime}</p>
                </div>
            ))}
        </div>
    )
}
export default Transactions