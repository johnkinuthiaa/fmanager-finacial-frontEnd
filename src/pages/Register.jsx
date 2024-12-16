import "./styles/login.css"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {useState} from "react";
import {useNavigate} from "react-router-dom";
const Register =()=>{
    const[showPassword,setShowPassword] =useState(false)
    const navigate =useNavigate()
    const changePasswordVisibility =()=>{
        setShowPassword(!showPassword)
    }
    return(
        <div className={"login"}>
            <div className={"login__container"}>
                <div className={"logo"}></div>
                <h1>Register</h1>
                <form>
                    <div className={"names"}>
                        <input type={"text"} placeholder={"First name"} required={true}/>
                        <input type={"text"} placeholder={"Last Name"} required={true}/>
                    </div>
                    <input type={"email"} placeholder={"Email"} required={true}/>
                    <div className={"password__container"}>
                        <input type={showPassword ? "text" : "password"} placeholder={"Password"} required={true}/>
                        <button type={"button"} onClick={() => changePasswordVisibility()} className={"show__password"}>{showPassword ?
                            <VisibilityIcon/> :
                            <VisibilityOffIcon/>}</button>
                    </div>
                    <button type={"submit"} className={"register__button"}>Register</button>
                    <p>or</p>
                    <div className={"sign__with"}>
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                    </div>
                    <div>
                        <p style={{color:"#fff"}}>Already have an account ? <span onClick={()=>navigate("/login")}>Sign in</span></p>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Register;