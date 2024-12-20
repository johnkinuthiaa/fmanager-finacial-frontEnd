import "./styles/landingPage.css"
import Button from "../components/Button.jsx";
import {ArrowUpward} from "@mui/icons-material";
import {Suspense} from "react";

const LandingPage =()=>{
    const mainStyles ={


        display:"flex",
        justifyContent:"space-evenly",
        width:"100%",

    }
    return(
        <div className={"landing__page"} style={mainStyles}>
            <div className={"main__section"}>
                <div className={"main__section__content"}>
                    <div className={"join__future"}>Join the future</div>
                    <h1>Evolving Finance management<br/> for the Digital Era</h1>
                    <pre>Discover the Future of finance:<br/>
                        Seamless Transactions,
                        Innovative Solutions,and user Friendly interface.
                    </pre>
                    <Button icon={<ArrowUpward/>} background={"blue"} text={"Lets get started"} navigateTo={"/login"}/>
                </div>
                <div className={"main__section__right__image__container"}>
                    <img src={"https://framerusercontent.com/images/L06kDydSsKJ8LId4Ou11xQiWas.png"} className={"phone__image"}/>
                    <img src={"https://framerusercontent.com/images/bVPQ8bjFHh73fMSk2VNDePSoA.png"} className={"card__image"}/>
                    <img src={"https://framerusercontent.com/images/aAo4r5F6F8W8XGsbOjQm2dwdJY.png"} className={"users__image"}/>
                </div>

            </div>
            <div className={"second__section"}>
                <div className={"second__section__text__content"}>
                    <div className={"join__future"}>The future of finance</div>
                    <h1>Our diverse suite of finance solutions</h1>
                    <p>Discover our wide-ranging financial tools. Experience seamless, user-friendly, and efficient
                        financial management at your fingertips.</p>
                </div>
                <div className={"images"}>
                    <div className={"left__image__container"}>
                        <div className={"first__container"}>
                            <div className={"first__container__text"}>
                                <h3>Automated Savings</h3>
                                <p>Automatically move money to savings based on personalized financial
                                    recommendations.</p>
                            </div>
                            <div style={{display:"flex",flexDirection:"column"}}>
                                <img src={"https://framerusercontent.com/images/MQb4Ycr6eQCR5dmiBbl5QbWP3o.png"}
                                     className={"savings__image"}/>
                                <img src={"https://framerusercontent.com/images/PyJ2qhv7Lb6gkXe5UFwfpMEMlI.svg"}
                                     className={"insights"}/>
                            </div>

                        </div>
                        <div className={"insights__container"}>
                            <div className={"insights__image__container"}>
                                <img src={"https://framerusercontent.com/images/ZQlA8w8Kgds4EJvOXiEAaROXGkA.svg"}
                                     className={"insights__image"}/>
                            </div>

                            <div className={"first__container__text"}>
                                <h3>Investment Opportunities</h3>
                                <p>Explore a wide range of investment options tailored to your unique financial goals</p>
                            </div>

                        </div>
                    </div>
                    <div className={"right__image__container"}>
                        <div>Peaceful tomorrow</div>
                        <div style={{display:"flex",flexDirection:"column"}}>
                            <img src={"https://framerusercontent.com/images/cwzvYuxrwyC5BZINFHuxgJbw.png"}
                                 className={"pension__image"}/>
                            <img src={"https://framerusercontent.com/images/VE3dehGxKSwWx7R2LFulo4e80w.svg"}
                                 className={"pension__graph"}/>
                        </div>
                        <div>
                            <h1>Retirement Planning</h1>
                            <p>guiding your journey comfortable retirement tools guide.</p>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}
export default LandingPage;