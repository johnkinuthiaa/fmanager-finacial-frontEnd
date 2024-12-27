
const ModalNotification =({message})=>{
    const modalStyles ={
        top:90,
        right:0,
        position:"absolute",
        width:"fit-content",
        backgroundColor:"#fff",
        boxShadow:"0 0 10px rgb(0,0,0)",
        padding:"10px",
        fontSize:"16px",
        fontWeight:"bold"
    }
    return(
        <div className={"modal"} style={modalStyles}>
            <div>{message}</div>
        </div>
    )
}
export default ModalNotification