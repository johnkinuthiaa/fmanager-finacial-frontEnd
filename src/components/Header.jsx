import {Link} from "react-router-dom";
import Button from "./Button.jsx";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import "./styles/Header.css"
import {useState} from "react";

const Header =()=>{
    const[themeIcon,setThemeIcon] =useState(<WbSunnyIcon/>);
    const headerStyles ={
        display:"flex",
        justifyContent:"space-evenly",
        alignItems:"center",
        // top:0,
        // position:"fixed",
        width:"100%",
        padding:"25px",
        scroll:"hidden",
        backgroundColor:"rgb(7, 12, 20)",
        margin:"0 auto"
    }
    return(
        <div className={"header"} style={headerStyles}>
            <div className={"logo__title"}>
                <img src={"https://framerusercontent.com/images/AGPkgX5dQJGUFEV0yyQmnbMZsrw.svg"}
                     alt={"financio logo"}/>

            </div>
            <div className={"header__navigation"}>
                <nav>
                    <ul>
                        <Link to={"/"}>Features</Link>
                        <Link to={"/"}>Pricing</Link>
                        <Link to={"/"}>Blog</Link>
                        <Link to={"/"}>Contact</Link>
                    </ul>
                </nav>
            </div>
            <div style={{display:"flex"}}>
                <Button text={"Login"} icon={<ArrowOutwardIcon/>} background={"blue"} navigateTo={"/login"}/>
                <Button text={"Sign up"} icon={<ArrowOutwardIcon/>} background={"white"} navigateTo={"/register"}/>
                <div className={"theme__changer"}>
                    {themeIcon}
                </div>

            </div>
        </div>
    )
}
export default Header;