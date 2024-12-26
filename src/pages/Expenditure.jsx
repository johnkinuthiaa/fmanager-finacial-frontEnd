import {useEffect, useState} from "react";

const Expenditure =()=>{

    const [exName,setExName] =useState("")
    const[category,setCategory] =useState("")
    const[amount,setAmount] =useState(0)
    const[expendituresCreated,setExpendituresCreated] =useState([])
    const userId =1
    const myHeaders =new Headers()
    myHeaders.append("Content-Type","application/json")

    useEffect(()=>{
        getAllExpendituresByUser()
    },[])

    const getAllExpendituresByUser =(async ()=>{
        const response =await fetch(`http://localhost:8080/api/v1/expenditures/get/expenditure?userId=${userId}`)
        if(response.ok){
            const data =await response.json()
            setExpendituresCreated(data.allExpenditures)
            console.log(expendituresCreated)
        }

    })

    const createNewExpenditure =(async ()=>{
        const response =await fetch(`http://localhost:8080/api/v1/expenditures/new/expenditure?userId=${userId}`,{
            method:"POST",
            body:JSON.stringify({
                name:exName,
                category:category,
                amount:amount
            }),
            headers:myHeaders,
            cache:"default"
        })
        if(response.ok){
            const data =await response.json()
            alert(data.message)
        }else{
            console.log("network error")
        }
    })
    return(
        <div className={"expenditure"} style={{marginTop:"100px"}}>
            <h1>Enter a new expenditure</h1>
            <form onSubmit={(e)=>{
                e.preventDefault()
                createNewExpenditure()
            }}>
                <input type={"text"} placeholder={"new expenditure's name"} required={true} onChange={(e)=>{
                    setExName(e.target.value)
                }}/>
                <input type={"number"} placeholder={"amount"} required={true} onChange={(e)=>{
                    setAmount(e.target.value)
                }}/>
                <input type={"text"} placeholder={"expenditure category"} required={true} onChange={(e)=>setCategory(e.target.value)}/>
                <button type={"submit"}>create</button>
            </form>
            <div className={"existing__expenditures"} >
                <h1 style={{color:"black"}}>My expenditures</h1>
                <div style={{display:"flex",gap:"10px",padding:"10px"}}>
                    <h3>Name</h3>
                    <h3>Category</h3>
                    <h3>Date</h3>
                    <h3>Time</h3>
                    <h3>Amount spent</h3>
                </div>
                {expendituresCreated.length>0?(
                    expendituresCreated.map((expenditure)=>(
                        <div style={{display:"flex",gap:"10px",padding:"10px"}}>
                            <p>{expenditure.name}</p>
                            <p>{expenditure.category}</p>
                            <p>{expenditure.spentOn.toString().substring(0,10)} </p>
                            <p> {expenditure.spentOn.toString().substring(11, 16)} hrs</p>
                            <p>{expenditure.amount}</p>
                        </div>

                    ))
                ):(
                    <div>No active expenditures</div>
                )}
            </div>
        </div>
    )
}
export default Expenditure