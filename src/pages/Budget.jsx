import {useEffect, useState} from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {alertClasses, Modal} from "@mui/material";
import DashBoard from "./DashBoard.jsx";
import ModalNotification from "../components/ModalNotification.jsx";

const Budget =()=>{
    const userId =2
    const baseUrl ="http://localhost:8080/api/v1/budget"
    const [formHidden,setFormHidden] =useState(true)

    const[budgetData,setBudgetData]=useState([])
    const [searchTerm,setSearchTerm] =useState("")
    const [name,setName] =useState("")
    const [amount,setAmount] =useState(0)
    const [month,setMonth] =useState("")
    const [category,setCategory] =useState("")
    const[openModal,setOpenModal] =useState(false)

    useEffect(()=>{
        fetchBudget()
    },[])
    const fetchBudget =(async ()=>{
        const response =await fetch(`${baseUrl}/get/all/user?userId=${userId}`)
        if(response.ok){
            const data =await response.json()
            setBudgetData(data.budgetList)
        }
    })
    const deleteBudget =(async (userId,budgetId)=>{
        const response =await fetch(`${baseUrl}/delete/by/id?userId=${userId}&budgetId=${budgetId}`,{
            method:"DELETE"
        })
        if(response.ok){
            const data =await response.json()
            alert(data?.message)
        }

    })
    const searchForBudget =(async ()=>{
        const response =await fetch(`${baseUrl}/get/name?name=${searchTerm}&userId=${userId}`)
        if(response.ok){
            const data =await response.json()
            setBudgetData(data.budgetList)
        }
    })
    const createNewBudget =(async()=>{
        const myHeaders =new Headers()
        myHeaders.append("Content-Type","application/json")
        const response =await fetch(`${baseUrl}/create?userId=${userId}`,{
            method:"POST",
            body:JSON.stringify({
                name: `${name}`,
                amount: `${amount}`,
                category: `${category}`,
                budgetMonth: `${month}`,
            }),
            headers:myHeaders
        })
        if(response.ok){

        }
    })
    return(
        <div className={"budgetContainer"}>
            <h1> my Budgets</h1>
            <div>
                <input type={"search"} placeholder={"search for budget"} onChange={(e)=>{
                    setSearchTerm(e.target.value)
                }}/>
                <button type={"submit"} onClick={(e)=>{
                    e.preventDefault()
                    searchForBudget()
                }}> search</button>
            </div>
            {formHidden!==true&& (
                <div className={"budget__creating"}>
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        createNewBudget()
                    }}>
                        <input type={"text"} placeholder={"budget name"} onChange={(e) => setName(e.target.value)}/>
                        <input type={"number"} placeholder={"amount to spend"}
                               onChange={(e) => setAmount(e.target.value)}/>
                        <input type={"text"} min={0} placeholder={"category"}
                               onChange={(e) => setCategory(e.target.value)}/>
                        <input type={"text"} placeholder={"budget for month"}
                               onChange={(e) => setMonth(e.target.value)}/>
                        <button type={"submit"} onClick={() => setTimeout(()=>{
                            alert("new budget created")
                            setFormHidden(true)
                        },2000)
                        }>submit budget</button>
                    </form>

                </div>
            )}
            <button onClick={()=>setFormHidden(false)}>Create new budget</button>

            <div className={"budgets"}>
                <div className={"headers"} style={{display: "flex", gap: "5px"}}>
                    <h3>Id</h3>
                    <h3>Name</h3>
                    <h3>Amount</h3>
                    <h3>Date Created</h3>
                    <h3>Budget Name</h3>
                    <h3>Action</h3>
                </div>
                {budgetData?.map((budget, key) => (
                    <div className={"budget__item"} style={{display: "flex", gap: "5px"}} key={key}>
                        <div style={{display: "flex", gap: "5px"}} id={budget.id}>
                            <p>{budget.id}</p>
                            <p>{budget.name}</p>
                            <p>{budget.amount}</p>
                            <p>{budget.createdOn}</p>
                            <p>{budget.budgetMonth}</p>
                        </div>
                        <div className={"buttons"}>
                            <button className={"delete__btn"} id ={budget.id} onClick={(e)=>{
                                deleteBudget(userId,budget.id)

                            }}><DeleteIcon/></button>
                            <button className={"edit__btn"} onClick={()=>{
                                navigator("/")
                            }}><EditIcon/></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Budget