import Lottie from "lottie-react";
import space1 from "../assets/31313-spaceman-404.json";
import Header from "../components/Header";
// import SideMenu from "../components/SideMenu";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const NotFound = ({open, setOpen}) => {
    const [click, setClick] = useState(0);
    const navigate = useNavigate();
    useEffect(()=>{
        click && navigate("/");
    })
    
    return  <div>
                <div>
                    <Header open={open} setOpen={setOpen}/>
                </div>
                
                <div className="body-not-found" style={{height:'60vh',widht:'100vw', display:'flex', flexDirection:'column'}}>
                    
                        
                        <div>
                            <Lottie animationData={space1} loop={true} style={{height:'75vh'}}/>
                        </div>
                    
                        <button onClick={() => {setClick(click + 1)}} style={{width:'16rem', height:'4rem', margin:'0 auto', border:'2px solid lightblue', color:'lightblue', borderRadius:'10px',
                                                        fontSize:'1.5rem'}}>retour a l'accueil</button>
                    
                </div>
                
            </div>;
}

export default NotFound;