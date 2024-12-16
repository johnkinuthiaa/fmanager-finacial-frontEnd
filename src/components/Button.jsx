import "./styles/button.css"
const Button =({text,background,icon})=>{
    const buttonStyles ={
        outline:"none"
    }
    return(
        <div className={"button"}>
            <button style={buttonStyles}>{text}{icon}</button>
        </div>
    )
}
export default Button