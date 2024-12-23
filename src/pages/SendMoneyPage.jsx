import {useEffect, useState} from "react";

const SendMoneyPage =()=>{
    useEffect(()=>{
        getSenderDetails()
    },[])
    const userId =2
    const[senderId,setSenderId] =useState("")
    const[receiversId,setReceiversId] =useState("")
    const[amount,setAmount] =useState("")
    const[receiversName,setReceiversName] =useState("")
    const [sendersName,setSendersName] =useState("")
    const sendMoney =((async ()=>{
        const myHeaders =new Headers()
        myHeaders.append("Content-Type","application/json")
        const response =await fetch("http://localhost:8080/api/v1/transactions/send",{
            method:"POST",
            body:JSON.stringify({
                amount:`${amount}`,
                senderId:`${senderId}`,
                receiverId:`${receiversId}`
            }),
            headers:myHeaders
        })
        if(response.ok){
            const data =await response.json()
            alert(data.message)
        }

    }))
    const getSenderDetails =(async()=>{
        const response =await fetch(`http://localhost:8080/api/v1/auth/get/user?userId=${userId}`)
        const data =await response.json()
        setSendersName(data.user.username)
        setSenderId(data.user.accountNumber)
    })
    return(
        <div className={"do__Transactions"} style={{display:"flex",lineHeight:"1.5",alignItems:"center",justifyContent:"flex-start",flexDirection:"column"}}>
            <div className={"heading"}>
                <div>
                    <h3>Send Money</h3>
                    <p>Get your last update for the last 7 days</p>
                </div>
                <div> see card</div>
            </div>
            <div className={"send__money__part"} style={{padding:"10px"}}>
                <div className={"transfer"}>
                    <div>
                        <h3>Single Transfer</h3>
                        <p>send money directly from your account</p>
                    </div>
                    <div className={"money__sending__form"}>
                        <form onSubmit={(e)=>{
                            e.preventDefault()
                            sendMoney()
                        }}>
                            <div style={{display:"flex",alignItems:"baseline",justifyContent:"space-between"}}>
                                <div>
                                    <p>Senders name</p>
                                    <input type={"text"} placeholder={"Senders name"} required={true} value={sendersName}
                                           style={{backgroundColor:"whitesmoke",color:"rgb(0,0,0)"}}
                                    />
                                </div>
                                <div>
                                    <p> To</p>
                                    <input type={"text"} placeholder={"Recipients name"} required={true} onChange={
                                        (e)=>setReceiversName(e.target.value)}
                                           style={{backgroundColor:"whitesmoke",color:"rgb(0,0,0)"}}
                                    />
                                </div>
                            </div>
                            <div style={{display:"flex",alignItems:"baseline",justifyContent:"space-between"}}>
                                <div>
                                    <p> Receivers Account</p>
                                    <input type={"text"} placeholder={"Account number"} required={true} onChange={
                                        (e)=>setReceiversId(e.target.value)}
                                           style={{backgroundColor:"whitesmoke",color:"rgb(0,0,0)"}}
                                    />
                                </div>
                                <div>
                                    <p> Amount</p>
                                    <input type={"text"} placeholder={"amount"} required={true} onChange={
                                        (e)=>setAmount(e.target.value)}
                                           style={{backgroundColor:"whitesmoke",color:"rgb(0,0,0)"}}
                                    />
                                </div>
                            </div>
                            <div style={{display:"flex",justifyContent:"center"}}>
                                <button type={"submit"} className={"send__money__btn"} style={{
                                    padding: "10px",
                                    borderRadius: "10px",
                                    backgroundColor: "rgb(10,50,255)",
                                    width: "70px",
                                    color: "#fff",
                                    border: "none",
                                    outline: "none",
                                    cursor: "pointer",

                                }}>
                                    send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    )
}
export default SendMoneyPage

/*
* private UUID senderId;
    private UUID receiverId;
    private Long amount;
* */
