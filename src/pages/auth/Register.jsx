import "../styles/login.css"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import {useState} from "react";
import {useNavigate} from "react-router-dom";
const Register =()=>{
    const[showPassword,setShowPassword] =useState(false)

    const BASE_URL ="http://localhost:8080/api/v1/auth"
    const endPoint ="/register"
    const navigate =useNavigate()

    const[firstName,setFirstName] =useState("")
    const[lastName,setLastName] =useState("")
    const[email,setEmail] =useState("")
    const[password,setPassword] =useState("")

    const changePasswordVisibility =()=>{
        setShowPassword(!showPassword)
    }
    const headers =new Headers();
    headers.append("Content-Type","application/json")
    const submitLoginDetails =(async ()=>{
        const response =await fetch(`${BASE_URL}${endPoint}`,{
            method:"POST",
            body:JSON.stringify({
                username:`${firstName}${lastName.concat("#1user")}`,
                password:password,
                email:email
            }),
            headers:headers
        })
        const data =await response.json()
        if(data.statusCode ===200){
            navigate("/login")
        }

    })
    return(
        <div className={"login"}>
            <div className={"login__container"}>
                <div className={"logo"}></div>
                <h1>Register</h1>
                <form onSubmit={(e)=>{
                    e.preventDefault()
                    submitLoginDetails()
                }}>
                    <div className={"names"}>
                        <input type={"text"} placeholder={"First name"} required={true} onChange={(e)=>setFirstName(e.target.value.trim())}/>
                        <input type={"text"} placeholder={"Last Name"} required={true} onChange={(e)=>setLastName(e.target.value.trim())}/>
                    </div>
                    <input type={"email"} placeholder={"Email"} required={true} onChange={(e)=>setEmail(e.target.value.trim())}/>
                    <div className={"password__container"}>
                        <input type={showPassword ? "text" : "password"} placeholder={"Password"} required={true} onChange={(e)=>setPassword(e.target.value.trim())}/>
                        <button type={"button"} onClick={() => changePasswordVisibility()} className={"show__password"}>{showPassword ?
                            <VisibilityIcon/> :
                            <VisibilityOffIcon/>}</button>
                    </div>
                    <button type={"submit"} className={"register__button"}>Register</button>
                    <p>or</p>
                    <div className={"sign__with"}>
                        <div>
                            <button><GoogleIcon/></button>
                        </div>
                        <div>
                            <button><AppleIcon/></button>
                        </div>
                        <div>
                            <button><FacebookIcon/></button>
                        </div>
                        <div>
                            <button><GitHubIcon/></button>
                        </div>

                    </div>
                    <div>
                        <p style={{color: "#fff"}}>Already have an account ? <span onClick={()=>navigate("/login")} style={{cursor:"pointer",textDecoration:"underline"}}>Log in</span></p>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Register;