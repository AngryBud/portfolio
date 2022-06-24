import { RiMenuFill } from "react-icons/ri";
import './Header.css';
import SideMenu from "./SideMenu";

const Header = ({open, setOpen}) => {
    
    return  <div className="header">
                <div className="header-left">
                    <RiMenuFill id='icon-menu' onClick={()=>setOpen(!open)}/>
                    <SideMenu open={open} setOpen={setOpen}/>
                </div>
            </div>;
}

export default Header;