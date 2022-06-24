import Lottie from "lottie-react";
import space1 from "../assets/31313-spaceman-404.json";
import Header from "../components/Header";
import SideMenu from "../components/SideMenu";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const NotFound = ({open, setOpen}) => {
    const [click, setClick] = useState(0);
    const navigate = useNavigate();
    useEffect(()=>{
        click && navigate("/");
    })
    
    return  <div>
                <Header open={open} setOpen={setOpen}/>
                <div className="body">
                    <div className="left-body">
                        {open && <SideMenu open={open} setOpen={setOpen}/>}
                    {/* {open && 
                         */}
                        <button onClick={() => {setClick(click + 1)}}>retour a l'accueil</button>
                    </div>
                    <div className="right-body">
                        <Lottie animationData={space1} loop={true}/>
                    </div>
                </div>
            </div>;
}

export default NotFound;