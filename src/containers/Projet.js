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
                        Qu'il s'agisse d'un annuaire pour les fans de l'univers Marvel, d'une reproduction du site Vinted en passant par l'application AirBnB, avec chacun leur implémentation phare (inscription, upload de fichier, géolocalisation, gestion du panier , vente en ligne, ...) en ReactJS ou React Native.
                        </p>
                    </div>
                    <div className="right-body-proj" style={{flex:'2'}}>
                        <img style={{ width:'30%'}} src={deliveroo} alt="deliveroo"/>
                        <img style={{ width:'30%'}} src={mac} alt="mac"/>
                        <img style={{ width:'20%'}} src={gsm} alt="gsm"/>
                    </div>
                </div>

                {/* VINTED */}
                <div className="body-proj" style={{backgroundColor:'lightblue'}}>
                    <div className="right-body-proj" style={{flex:'2', paddingLeft:'2vw'}}>
                        <img style={{width:'28%'}} src={vinted_left} alt="vinted_left"/>
                        <img style={{width:'28%'}} src={mac} alt="mac"/>
                        {/* <img style={{heignt:'200px', widt5:'300px'}} src={vinted_front} alt="vinted_front"/> */}
                        <img style={{width:'28%'}} src={vinted_right} alt="vinted_right"/>
                        </div>
                    <div className="left-body-proj" style={{display:'flex', flexDirection:'column',
                                                        flex:'1',padding:'2vh 2vw'}}>
                        <h1>Vinted</h1>
                        <p>Réplique du site de vente en ligne de vêtements vintage. Inscris-toi , mets en vente ton article et recherches-en un nouveau !</p>
                    
                    </div>
                </div>

                {/* APPLI AIRBNB */}
                <div className="body-proj" style={{border:'2px solid lightblue'}}>
                    <div className="left-body-proj" style={{display:'flex', flexDirection:'column',
                                                        flex:'1', padding:'2vh 2vw'}}>
                        
                        <h1>Airbnb</h1>
                        <p>Reproduction de l'application Airbnb.</p>
                        <p>
                        Connecte-toi, profite des photos et recherche un logement pour ton séjour.
                        </p>
                    </div>
                    <div className="right-body-proj" style={{flex:'2', display:'flex', justifyContent:'center'}}>
                        <img style={{width:'60%'}} src={airbnb} alt="airbnb"/>
                        {/* <img style={{heignt:'200px', width:'300px'}} src={mac} alt="mac"/>
                        <img style={{heignt:'200px', width:'100px'}} src={gsm} alt="gsm"/> */}
                    </div>
                </div>

                {/* PROJET MARVEL */}
                <div className="body-proj" style={{backgroundColor:'lightblue'}}>
                    <div className="right-body-proj" style={{flex:'2', paddingLeft:'2vw'}}>
                        <img style={{width:'28%'}} src={marvel1} alt="marvel1"/>
                        <img style={{width:'28%'}} src={marvel2} alt="marvel2"/>
                        <img style={{width:'28%'}} src={marvel3} alt="marvel3"/>
                        </div>
                    <div className="left-body-proj" style={{display:'flex', flexDirection:'column',
                                                        flex:'1',padding:'2vh 2vw'}}>
                        <h1>Fan de Comics ?</h1>
                        <p>Plongez dans l'annuaire Marvel et découvrez ou redécouvrez vos personnages et comics préférés.</p>
                        <p>Retrouvez chacun d'entre eux, chacune de leurs apparations.</p>
                        <p>Rejoins les fans Marvel et ajoutez l'un d'eux en favoris pour le retrouver en un clic !</p>
                    </div>
                </div>

                {/* THEATRE PROJET */}
                <div className="body-proj" style={{border:'2px solid lightblue'}}>
                    <div className="left-body-proj" style={{display:'flex', flexDirection:'column',
                                                        flex:'1', padding:'2vh 2vw'}}>
                        
                        <h1>Theatre d'ombres</h1>
                        <p>Creation d'une application pour mettre en avant la lecture partagée parent / enfant.</p>
                        <p>
                        Ajoutez le conte que vous souhaitez lire dans la librairie d'œuvre présentée.
                        Placer le smartphone au fond du théâtre .
                        </p>
                        <p> Lisez le conte, passer les scènes en actionnant le bras mécanique aimanté devant le téléphone ou par commande vocale.</p>
                    </div>
                    <div className="right-body-proj" style={{flex:'2',height:'300px', display:'flex', justifyContent:'center',alignItems:'center'}}>
                        <img style={{width:'40%'}} src={theatre} alt="theatre"/>
                        <img style={{height:'50%'}} src={theatre2} alt="theatre2"/>
                    </div>
                </div>
            </div>;
}

export default Projet;