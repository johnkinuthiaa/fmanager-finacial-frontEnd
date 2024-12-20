import {useNavigate} from "react-router-dom";

const SidebarCard =({text,icon,color,to})=>{
    const navigate =useNavigate()
    return (
        <div className={"dashBoard"} style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            border: "1px solid rgb(125, 136, 151)",
            padding: "10px",
            width: "95%",
            borderRadius: "10px",
            backgroundColor: "#ffffff",
            color: color?color:"rgb(125, 136, 151)",
            cursor:"pointer"
        }}
             onClick={()=>navigate(to)}
        >
            <p>{icon}</p>
            <h3 style={{marginLeft: "10px"}}>{text}</h3>
        </div>
    )
}
export default SidebarCard