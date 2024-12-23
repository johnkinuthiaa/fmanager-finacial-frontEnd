import {useEffect, useState} from "react";
import Transactions from "../components/Transactions.jsx";

const DashBoard =()=>{
    const userId =1
    const [walletInfo,setWalletInfo] =useState([])
    const [hidden,setHidden] =useState(true)
    useEffect(()=>{
        fetchDashBoardInfo()
    },[])

    const fetchDashBoardInfo =(async()=>{
        const response =await fetch(`http://localhost:8080/api/v1/wallet/get/userId?userId=${userId}`)
        if (response.ok){
            const data =await response.json()
            setWalletInfo(data.wallets)
        }else{
            console.log("error feching data")
        }
    })
    const dashboardStyles ={
        margin:"0 auto",
        width:"95%",
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
        <div className={"dashboard"} style={dashboardStyles}>
            <section style={{display:"flex",justifyContent:"center",width:"80%"}}>
                {walletInfo.length>0?(
                    walletInfo.map((item)=>(
                        <>
                            <div className={"credit__cards"} style={{padding: "10px", height: "400px", display: "flex"}}>
                                <div className={"card__left"} style={{
                                    borderRadius: "10px",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "10px",
                                    padding: "20px",
                                    backgroundColor: "#ffffff",
                                    width: "500px",
                                    justifyContent: "flex-start"
                                }}>
                                    <h3>Cards</h3>
                                    <div className={"credit"} style={{
                                        color: "#ffffff",
                                        borderRadius: "10px",

                                        display: "flex",
                                        flexDirection: "column",
                                        padding: "10px"
                                    }}>
                                        <div style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            padding: "10px",
                                            height: "200px"
                                        }}>
                                            <div className={"credit__card__name"}
                                                 style={{display: "flex", flexDirection: "column"}}>
                                                <p>name</p>
                                                <p style={{fontFamily:"sans-serif",fontWeight:"600"}}>{item.users.username}</p>
                                            </div>
                                            <div className={"credit__card__number"}
                                                 style={{display: "flex", flexDirection: "column",width:"214px"}}>
                                                <p>Card number</p>
                                                <div >
                                                    <p style={{fontSize:"10px"}}>{hidden?item.walletAccountNumber.replace(item.walletAccountNumber.substring(4,item.walletAccountNumber.length-4),"*******************"): item.walletAccountNumber}</p>
                                                    <div style={{cursor:"grab"}} onClick={()=>setHidden(!hidden)}> show</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className={"credit__card__name"}
                                                 style={{display: "flex", flexDirection: "column"}}>
                                                <h2>Balance</h2>
                                                <h2>Ksh {item.amount}</h2>
                                            </div>
                                        </div>

                                    </div>
                                    <div className={"credit__balance"}>
                                        <p>credit Limit :<span>{item.users.loanLimit}</span></p>
                                    </div>
                                </div>
                                <div className={"card__right"}>
                                    <div className={"card"}>
                                    </div>

                                </div>
                            </div>
                            <div className={"overall__statistics"} style={{
                                borderRadius: "10px",
                                display: "flex",
                                flexDirection: "column",
                                gap: "10px",
                                padding: "20px",
                                backgroundColor: "#ffffff",
                                width: "500px",
                                justifyContent: "flex-start",
                                height: "380px",
                                marginTop: "10px",
                                lineHeight: "1.5"
                            }}>
                                <h1>Overall Statistics</h1>
                                <div style={{display: "flex"}}>
                                    <div>
                                        <h3>Grocery</h3>
                                        <div className={"bar"} style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            width: "475px",
                                            marginRight: "10px"
                                        }}>
                                            <div className={"bar__horizontal"}
                                                 style={{width: "250px", height: "10px", backgroundColor: "blue"}}>

                                            </div>
                                            <p>37%</p>
                                        </div>
                                    </div>
                                </div>
                                <div style={{display: "flex"}}>
                                    <div className={"bar"}>
                                        <h3>Business</h3>
                                        <div className={"bar"} style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            width: "475px",
                                            marginRight: "10px"
                                        }}>
                                            <div className={"bar__horizontal"}
                                                 style={{width: "200px", height: "10px", backgroundColor: "red"}}>

                                            </div>
                                            <p>40%</p>
                                        </div>
                                    </div>
                                </div>
                                <div style={{display: "flex"}}>
                                    <div>
                                        <h3>Shopping</h3>
                                        <div className={"bar"} style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            width: "475px",
                                            marginRight: "10px"
                                        }}>
                                            <div className={"bar__horizontal"}
                                                 style={{width: "200px", height: "10px", backgroundColor: "orange"}}>

                                            </div>
                                            <p>25%</p>
                                        </div>
                                    </div>
                                </div>
                                <div style={{display: "flex"}}>
                                    <div>
                                        <h3>House</h3>
                                        <div className={"bar"} style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            width: "475px",
                                            marginRight: "10px"
                                        }}>
                                            <div className={"bar__horizontal"}
                                                 style={{width: "200px", height: "10px", backgroundColor: "hotpink"}}>

                                            </div>
                                            <p>12%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))

                ) : (
                    <div> content not found</div>
                )}

            </section>
            <section>

                <Transactions/>
            </section>

        </div>
    )
}
export default DashBoard