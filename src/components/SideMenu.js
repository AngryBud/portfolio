import {useNavigate} from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { RiComputerFill } from "react-icons/ri";
import { MdContactSupport } from "react-icons/md";
import FadeIn from 'react-fade-in';
import './SideMenu.css';

const SideMenu = ({open, setOpen}) => {
    const navigate = useNavigate();
    return  open && <div className="side-menu">
                        <FadeIn>
                        <div style={{opacity:'0.8'}}>
                            <FadeIn>
                            <div className="cate-menu" onClick={()=>{setOpen(!open); navigate('/')}}>
                                <HiHome  style={{fontSize:'2rem', marginRight:'2vw'}}/>
                                <h1>Home</h1>
                            </div>
                            <div className="cate-menu" onClick={()=>{setOpen(!open); navigate('/projets')}}>
                                <RiComputerFill style={{fontSize:'2rem', marginRight:'2vw'}}/>
                                <h1>Projets</h1>
                            </div>
                            <div className="cate-menu" onClick={()=>{setOpen(!open); navigate('/contact')}}>
                                <MdContactSupport style={{fontSize:'2rem', marginRight:'2vw'}}/>
                                <h1>Contact</h1>
                            </div>
                            </FadeIn>
                        </div>
                        </FadeIn>
                    </div>   
}

export default SideMenu;