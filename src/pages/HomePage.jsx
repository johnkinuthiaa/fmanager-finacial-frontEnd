import SideBar from "../components/SideBar.jsx";
import MidSect from "./MidSect.jsx";
import "./styles/homepage.css"

const HomePage =()=>{
    return(
        <div className={"SidebarAndPageContent"}>
            <SideBar/>
            <MidSect/>
        </div>

    )
}
export default HomePage