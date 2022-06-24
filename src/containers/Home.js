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
                                <img src={react} alt='react' style={{width:'8rem'}}/>
                                <img src={logo} alt='logo' style={{width:'20rem', height:'6rem'}}/>
                            
                            </div>
                            <div style={{display:'flex'}}>
                                <img src={cc} alt='c_c++' style={{height:'8rem', width:'8rem'}}/>
                                <img src={git} alt='git' style={{height:'8rem', width:'8rem'}}/>
                                <img src={mongo} alt='mongo' style={{height:'8rem', width:'8rem'}}/>
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