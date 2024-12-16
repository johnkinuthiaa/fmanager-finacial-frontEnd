import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import "./styles/login.css"
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";

const Login =()=>{
    const[showPassword,setShowPassword] =useState(false)
    const navigate =useNavigate()
    const changePasswordVisibility =()=>{
        setShowPassword(!showPassword)
    }
    return(
        <div className={"login"}>
            <div className={"login__container"}>
                <div className={"logo"}></div>
                <h1>Login</h1>
                <form>
                    <input type={"email"} placeholder={"Email"}/>
                    <input type={"text"} placeholder={"Username"}/>
                    <div className={"password__container"}>
                        <input type={showPassword ? "text" : "password"} placeholder={"Password"} required={true}/>
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
                        <p style={{color: "#fff"}}>Dont have an account ?<span onClick={() => navigate("/register")}>Sign in</span>
                        </p>
                    </div>
                </form>
            </div>

        </div>
    )
}
export default Login;