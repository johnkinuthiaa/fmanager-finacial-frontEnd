import "./styles/button.css"
import {useNavigate} from "react-router-dom";
const Button =({text,background,icon,navigateTo})=>{
    const navigate =useNavigate();
    const buttonStyles ={
        outline:"none"
    }
    return(
        <div className={"button"}>
            <button style={buttonStyles} onClick={()=>{
                navigate(navigateTo)
            }}>{text}{icon}</button>
        </div>
    )
}
export default Button