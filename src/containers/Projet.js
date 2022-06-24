import Header from '../components/Header';

import "./Projet.css";
import airbnb from '../assets/airbnb.png';
import deliveroo from '../assets/deliveroo.png'
import mac from "../assets/mac-home.png";
import gsm from "../assets/gsm-home.png";

import vinted_left from '../assets/vinted_left.png';
import vinted_right from '../assets/vinted_right.png';

import marvel1 from '../assets/marvel1.png';
import marvel2 from '../assets/marvel2.png';
import marvel3 from '../assets/marvel3.png';

import theatre from '../assets/theatre.png';
import theatre2 from '../assets/theatre2.png';


const Projet= ({open, setOpen}) => {

  return    <div>
                <Header open={open} setOpen={setOpen}/>

                {/* PRESENTATION PROJET */}
                <div className="body-proj" style={{border:'2px solid lightblue'}}>
                    <div className="left-body-proj" style={{display:'flex', flexDirection:'column',
                                                        flex:'1', padding:'2vh 2vw'}}>
                        
                        <h1>Quelques travaux</h1>
                        <p>Voici quelques sites webs et applications mobiles, existants ou créés.</p>
                        <p>
                            Qu'il s'agisse d'un annuaire pour les fans de l'univers Narvel, d'une reproduction du site Vinted en passant par l'application AirBnB, cela mettre les possibilitées de developpement en ReactJS ou React Native.
                        </p>
                    </div>
                    <div className="right-body-proj" style={{flex:'2'}}>
                        <img style={{heignt:'200px', width:'300px'}} src={deliveroo} alt="deliveroo"/>
                        <img style={{heignt:'200px', width:'300px'}} src={mac} alt="mac"/>
                        <img style={{heignt:'200px', width:'100px'}} src={gsm} alt="gsm"/>
                    </div>
                </div>

                {/* VINTED */}
                <div className="body-proj" style={{backgroundColor:'lightblue'}}>
                    <div className="left-body-proj" style={{flex:'2', paddingLeft:'2vw'}}>
                        <img style={{heignt:'200px', width:'230px'}} src={vinted_left} alt="vinted_left"/>
                        <img style={{heignt:'200px', width:'230px'}} src={mac} alt="mac"/>
                        {/* <img style={{heignt:'200px', widt5:'300px'}} src={vinted_front} alt="vinted_front"/> */}
                        <img style={{heignt:'200px', width:'230px'}} src={vinted_right} alt="vinted_right"/>
                        </div>
                    <div className="right-body-proj" style={{display:'flex', flexDirection:'column',
                                                        flex:'1',padding:'2vh 2vw'}}>
                        <h1>Mes principaux travaux</h1>
                        <p>Voici differentes répliques de sites internet et applications mobile, existant ou creation.</p>
                    
                    </div>
                </div>

                {/* APPLI AIRBNB */}
                <div className="body-proj" style={{border:'2px solid lightblue'}}>
                    <div className="left-body-proj" style={{display:'flex', flexDirection:'column',
                                                        flex:'1', padding:'2vh 2vw'}}>
                        
                        <h1>Airbnb</h1>
                        <p>Voici quelques sites webs et applications mobiles, existants ou créés.</p>
                        <p>
                            Qu'il s'agisse d'un annuaire pour les fans de l'univers Narvel, d'une reproduction du site Vinted en passant par l'application AirBnB, cela mettre les possibilitées de developpement en ReactJS ou React Native.
                        </p>
                    </div>
                    <div className="right-body-proj" style={{flex:'2', display:'flex', justifyContent:'center'}}>
                        <img style={{heignt:'400px', width:'500px'}} src={airbnb} alt="airbnb"/>
                        {/* <img style={{heignt:'200px', width:'300px'}} src={mac} alt="mac"/>
                        <img style={{heignt:'200px', width:'100px'}} src={gsm} alt="gsm"/> */}
                    </div>
                </div>

                {/* PROJET MARVEL */}
                <div className="body-proj" style={{backgroundColor:'lightblue'}}>
                    <div className="left-body-proj" style={{flex:'2', paddingLeft:'2vw'}}>
                        <img style={{heignt:'230px', width:'230px'}} src={marvel1} alt="marvel1"/>
                        <img style={{heignt:'230px', width:'230px'}} src={marvel2} alt="marvel2"/>
                        <img style={{heignt:'230px', width:'230px'}} src={marvel3} alt="marvel3"/>
                        </div>
                    <div className="right-body-proj" style={{display:'flex', flexDirection:'column',
                                                        flex:'1',padding:'2vh 2vw'}}>
                        <h1>Mes principaux travaux</h1>
                        <p>Voici differentes répliques de sites internet et applications mobile, existant ou creation.</p>
                    
                    </div>
                </div>

                {/* THEATRE PROJET */}
                <div className="body-proj" style={{border:'2px solid lightblue'}}>
                    <div className="left-body-proj" style={{display:'flex', flexDirection:'column',
                                                        flex:'1', padding:'2vh 2vw'}}>
                        
                        <h1>Airbnb</h1>
                        <p>Voici quelques sites webs et applications mobiles, existants ou créés.</p>
                        <p>
                            Qu'il s'agisse d'un annuaire pour les fans de l'univers Narvel, d'une reproduction du site Vinted en passant par l'application AirBnB, cela mettre les possibilitées de developpement en ReactJS ou React Native.
                        </p>
                    </div>
                    <div className="right-body-proj" style={{flex:'2',height:'300px', display:'flex', justifyContent:'center'}}>
                        <img style={{heignt:'300px', width:'300px'}} src={theatre} alt="theatre"/>
                        <img style={{heignt:'50%', width:'300px'}} src={theatre2} alt="theatre2"/>
                    </div>
                </div>
            </div>;
}

export default Projet;