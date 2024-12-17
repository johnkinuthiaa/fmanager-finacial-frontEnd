import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import "./styles/login.css"
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";

const Login =()=>{
    const BASE_URL ="http://localhost:8080/api/v1/auth"
    const ENDPOINT ="/login"

    const[showPassword,setShowPassword] =useState(false)
    const[username,setUsername] =useState("")
    const[password,setPassword] =useState("")
    const[email,setEmail] =useState("")


    const navigate =useNavigate()
    const changePasswordVisibility =()=>{
        setShowPassword(!showPassword)
    }

    const headers =new Headers()
    headers.append("Content-Type","application/json")

    const userLogin =(async ()=>{
        const response =await fetch(`${BASE_URL}${ENDPOINT}`,{
            method:"POST",
            body:JSON.stringify({
                username:`${username}`,
                password:`${password}`
            }),
            headers:headers
        })
        const data =response.json()
        if(data.jwtToken !==null){
            navigate("/")
        }
    })
    return(
        <div className={"login"}>
            <div className={"login__container"}>
                <div className={"logo"}></div>
                <h1>Login</h1>
                <form onSubmit={(e)=>{
                    e.preventDefault()
                    userLogin()
                }}>
                    <input type={"email"} placeholder={"Email"} onChange={(e)=>setEmail(e.target.value)}/>
                    <input type={"text"} placeholder={"Username"} onChange={(e)=>setUsername(e.target.value)}/>
                    <div className={"password__container"}>
                        <input type={showPassword ? "text" : "password"} placeholder={"Password"} required={true} onChange={(e)=>setPassword(e.target.value)}/>
                        <button type={"button"} onClick={() => changePasswordVisibility()}
                                className={"show__password"}>{showPassword ?
                            <VisibilityIcon/> :
                            <VisibilityOffIcon/>}</button>
                    </div>
                    <button type={"submit"} className={"register__button"}>Login</button>
                    <p>or</p>
                    <div className={"sign__with"}>
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                    </div>
                    <div>
                        <p style={{color: "#fff"}}>Dont have an account ? <span onClick={() => navigate("/register")} style={{cursor:"pointer",textDecoration:"underline"}}>Sign in</span>
                        </p>
                    </div>
                </form>
            </div>

        </div>
    )
}
export default Login;