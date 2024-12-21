const DashBoard =()=>{
    return(
        <div className={"dashboard"}>
            <div className={"credit__cards"}>
                <div className={"card__left"}>
                    <h3>Cards</h3>
                    <div className={"credit"}>
                        <div>
                            <div className={"credit__card__name"}>
                                <p>Name</p>
                                <p>Name</p>
                            </div>
                            <div className={"credit__card__number"}>
                                <p>Card number</p>
                                <p>card number</p>
                            </div>
                        </div>
                        <div>
                            <div className={"credit__card__name"}>
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
        </div>
    )
}
export default DashBoard