import Header from "../components/Header";
import Lottie from "lottie-react";
import home from "../assets/lottie-home.json";

/////////LOGO//////////////
import cc from '../assets/cc.png';
// import js from '../assets/js.png';
// import html_css from '../assets/html_css.png';
// import forest from '../assets/forest.jpeg';
import git from '../assets/git.png';
import logo from '../assets/logo.png';
import react from '../assets/react.png';
import mongo from '../assets/mongo.png';
// import redux from '../assets/redux.png';
import photo from '../assets/photo_circle.png';
import { TbFileSearch } from "react-icons/tb";
// import cvpic from '../assets/cv.png';
import cvpic from '../assets/lastCV.jpg';

import './Home.css';
import { useState } from "react";
import ScrollToTop from "react-scroll-to-top";
// import {useNavigate} from "react-router-dom";

const Home = ({open, setOpen}) => {
    const [cv, setCv] = useState(false);
    return  <div className="App">
                {/* <div> */}
                    <Header open={open} setOpen={setOpen} cv={cv} setCv={setCv}/>
                {/* </div> */}


                <ScrollToTop/>
                {cv ? <div className="cv-box" style={{width:'100vw', height:'80vh', display:'flex'}}><img id='cv' src={cvpic} alt='cv'style={{flex:'1', objectFit:'contain'}} onClick={()=>cv && setCv(!cv)}/> </div> : 
                <div className="body-home" onClick={()=>{cv && setCv(!cv); setOpen(false)}} >
                    <div className="left-body-home" style={{display:'flex', flexDirection:'column'}}>
                        <div className="title">
                            <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                                <h1 style={{marginRight:'2rem'}}>Clément Notin</h1>
                                <img id='me' src={photo} alt='me'/>
                            </div>
                            
                            <p>Développeur React passionné en recherche de stage de 4 à 6 mois.</p>
                            <p>J'ai appris la programmation en C à l'école 42 qui m'a permis d'être à l'aise avec l'algorithmie, puis React Js et React Native en Bootcamp au Reacteur.</p>
                            <p>Je cherche à ce jour une entreprise pour débuter un stage en React. Je m'intègre facilement dans une équipe et suis très volontaire.</p>
                            <p>Informations disponibles à la page Contact</p>
                        </div>
                        <div className="logos">
                            <div style={{display:'flex', alignItems:'center'}}>
                                <img src={react} alt='react' style={{width:'30%'}}/>
                                <img src={logo} alt='logo' style={{width:'40%'}}/>
                            
                            </div>
                            <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                                <img src={cc} alt='c_c++' style={{width:'16%'}}/>
                                <img src={git} alt='git' style={{width:'18%'}}/>
                                <img src={mongo} alt='mongo' style={{width:'18%'}}/>
                            </div>
                            {/* <img src={html_css} alt='html_css' style={{border:'2px solid blue', width:'14rem'}}/> */}
                        </div>
                    </div>
                    <div className="right-body-home" >
                        
                        
                            <><Lottie animationData={home} loop={true} style={{height:'80vh'}}/>
                                <button id='cv-button' style={{marginBottom:'2rem',display:'flex',alignItems:'center',justifyContent:'center', width:'40%', height:'8%',fontSize:'1.5rem',
                                        border:'2px solid lightblue', color:'lightblue', backgroundColor:'white', borderRadius:'10px'}}
                                                onClick={()=>setCv(true)}><TbFileSearch></TbFileSearch>CV</button>
                        </>
                        
                        </div>
                        
                    </div>}
                
            </div>
}

export default Home;