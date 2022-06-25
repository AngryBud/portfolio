import {useNavigate} from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { RiComputerFill } from "react-icons/ri";
import { MdContactSupport } from "react-icons/md";
import FadeIn from 'react-fade-in';
import './SideMenu.css';

const SideMenu = ({open, setOpen , cv, setCv}) => {
    const navigate = useNavigate();
    return  open && <div className="side-menu">
                        <FadeIn>
                        <div className="all-cate" style={{opacity:'0.8',width:'27vw'}}>
                            <FadeIn>
                            <div className="cate-menu" onClick={()=>{cv && setCv(false);setOpen(!open); navigate('/')}}>
                                <HiHome  style={{fontSize:'2rem', marginRight:'2vw'}}/>
                                <h1 id="title-side">Home</h1>
                            </div>
                            <div className="cate-menu" onClick={()=>{cv && setCv(false);setOpen(!open); navigate('/projets')}}>
                                <RiComputerFill style={{fontSize:'2rem', marginRight:'2vw'}}/>
                                <h1 id="title-side">Projets</h1>
                            </div>
                            <div className="cate-menu" onClick={()=>{cv && setCv(false);setOpen(!open); navigate('/contact')}}>
                                <MdContactSupport style={{fontSize:'2rem', marginRight:'2vw'}}/>
                                <h1 id="title-side">Contact</h1>
                            </div>
                            </FadeIn>
                        </div>
                        </FadeIn>
                    </div>   
}

export default SideMenu;