import Header from "../components/Header";
import Lottie from "lottie-react";
import home from "../assets/lottie-home.json";

/////////LOGO//////////////
import cc from '../assets/cc.png';
import js from '../assets/js.png';
import html_css from '../assets/html_css.png';
import forest from '../assets/forest.jpeg';
import git from '../assets/git.png';
import logo from '../assets/logo.png';
import react from '../assets/react.png';
import mongo from '../assets/mongo.png';
import redux from '../assets/redux.png';

import './Home.css';
// import {useNavigate} from "react-router-dom";

const Home = ({open, setOpen}) => {

    return  <div className="App">
                <div>
                    <Header open={open} setOpen={setOpen}/>
                </div>


                <div className="body-home">
                    <div className="left-body-home" style={{display:'flex', flexDirection:'column', justifyContent:'space-around'}}>
                        <div className="title">
                            <h1>Clément Notin</h1>
                            <p>Développeur React en recherche de stage de 4 à 6 mois.</p>
                    
                        </div>
                        <div className="logos">
                            <div style={{display:'flex', alignItems:'center'}}>
                                <img src={react} alt='react' style={{border:'2px solid blue', width:'8rem'}}/>
                                <img src={logo} alt='logo' style={{border:'2px solid blue', width:'20rem', height:'6rem'}}/>
                            
                            </div>
                            <div style={{display:'flex'}}>
                                <img src={cc} alt='c_c++' style={{height:'8rem', width:'8rem',border:'2px solid blue'}}/>
                                <img src={git} alt='git' style={{height:'8rem', width:'8rem',border:'2px solid blue'}}/>
                                <img src={mongo} alt='mongo' style={{height:'8rem', width:'8rem',border:'2px solid blue'}}/>
                            </div>
                            {/* <img src={html_css} alt='html_css' style={{border:'2px solid blue', width:'14rem'}}/> */}
                        </div>
                    </div>
                    <div className="right-body-home">
                        <Lottie animationData={home} loop={true} style={{height:'80vh'}}/>
                    </div>
                </div>
            </div>
}

export default Home;