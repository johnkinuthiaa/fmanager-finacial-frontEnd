const DashBoard =()=>{
    const dashboardStyles ={
        margin:"0 auto",
        width:"95%",
        display:"flex",
        alignContent:"center",
        justifyContent:"center",
        backgroundColor:"whiteSmoke",
        height:"100vh"
    }
    return(
        <div className={"dashboard"} style={dashboardStyles}>
            <section style={{display:"flex",justifyContent:"center",width:"80%"}}>
                <div className={"credit__cards"} style={{padding:"10px"}}>
                    <div className={"card__left"} style={{borderRadius:"10px",display:"flex",flexDirection:"column",gap:"10px",padding:"20px",
                        backgroundColor:"#ffffff",width:"500px",justifyContent:"flex-start"}}>
                        <h3>Cards</h3>
                        <div className={"credit"} style={{color:"#ffffff",borderRadius:"10px",background:"rgb(90, 104, 255)",display:"flex",flexDirection:"column",padding:"10px"}} >
                            <div style={{display:"flex",justifyContent:"space-between",padding:"10px",height:"250px"}}>
                                <div className={"credit__card__name"} style={{display:"flex",flexDirection:"column"}}>
                                    <p>Name</p>
                                    <p>Name</p>
                                </div>
                                <div className={"credit__card__number"} style={{display:"flex",flexDirection:"column"}}>
                                    <p>Card number</p>
                                    <p>card number</p>
                                </div>
                            </div>
                            <div>
                                <div className={"credit__card__name"} style={{display:"flex",flexDirection:"column"}}>
                                    <h2>Balance</h2>
                                    <h2>$123456</h2>
                                </div>
                            </div>

                        </div>
                        <div className={"credit__balance"}>
                            <p>credit Limit :<span>100.00</span></p>
                        </div>
                    </div>
                    <div className={"card__right"}>
                        <div className={"card"}></div>

                    </div>
                </div>
                <div className={"overall__statistics"} style={{borderRadius:"10px",display:"flex",flexDirection:"column",gap:"10px",padding:"20px",
                        backgroundColor:"#ffffff",width:"500px",justifyContent:"flex-start",height:"433px",marginTop:"10px"}}>
                    <h1>Overall Statistics</h1>
                    <div style={{display:"flex"}}>
                        <div>
                            <h3>Grocery</h3>
                            <div className={"bar"} style={{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%"}}>
                                <div className={"bar__horizontal"} style={{width:"200px",height:"10px",backgroundColor:"blue"}}>

                                </div>
                                <p>37%</p>
                            </div>
                        </div>
                    </div>
                    <div style={{display:"flex"}}>
                        <div className={"bar"} >
                            <h3>Business</h3>
                            <div className={"bar"} style={{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%"}}>
                                <div className={"bar__horizontal"} style={{width:"200px",height:"10px",backgroundColor:"red"}}>

                                </div>
                                <p>40%</p>
                            </div>
                        </div>
                    </div>
                    <div style={{display:"flex"}}>
                        <div>
                            <h3>Shopping</h3>
                            <div className={"bar"} style={{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%"}}>
                                <div className={"bar__horizontal"} style={{width:"200px",height:"10px",backgroundColor:"orange"}}>

                                </div>
                                <p>25%</p>
                            </div>
                        </div>
                    </div>
                    <div style={{display:"flex"}}>
                        <div >
                            <h3>House</h3>
                            <div className={"bar"} style={{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%"}}>
                                <div className={"bar__horizontal"} style={{width:"200px",height:"10px",backgroundColor:"hotpink"}}>

                                </div>
                                <p>12%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
export default DashBoard