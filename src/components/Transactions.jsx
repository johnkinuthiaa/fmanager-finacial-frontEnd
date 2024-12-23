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
    return(
        <div>
            {transactionDone.map((trans)=>(
                <div style={{display:"flex",gap:"20px",padding:"10px"}}>
                    <p>{trans.transactionType}</p>
                    <p>{trans.senderId}</p>
                    <p>{trans.receiverId}</p>
                    <p>{trans.transactionId}</p>
                    <p>{trans.amount}</p>
                    <p>{trans.transactionTime}</p>
                </div>
            ))}
        </div>
    )
}
export default Transactions