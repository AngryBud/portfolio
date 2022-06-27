import Header from '../components/Header';
import Lottie from "lottie-react";
// import space1 from "../assets/spaceman-contact.json";
import contact from "../assets/lottie-contact.json";
import { BsLinkedin,BsFillTelephoneFill } from "react-icons/bs";
import ScrollToTop from "react-scroll-to-top";

import { useState } from 'react';
import {toast, ToastContainer} from 'react-toastify';
import axios from 'axios';

import './Contact.css';
import 'react-toastify/dist/ReactToastify.css';

const Contact = ({open, setOpen}) => {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const handleSubmit = async(e) => {
        e.preventDefault();
        if (!email || !subject || !message)
            return toast.error("Remplissez tous les champs.");
        try{
            console.log("message", message);
            const {data} = await axios.post(`https://mail-portfolio-contact.herokuapp.com/api/email`,{
                email,
                subject,
                message,
            })
            setLoading(false);
            toast.success(data.message);
            setEmail('');
            setSubject('');
            setMessage('');
        }catch(error){
            setLoading(false);
            toast.error("error"
            )
        }
    }
    return  <div style={{backgroundColor:'lightblue'}}>
                {/* <div> */}
                <Header open={open} setOpen={setOpen}/>
                {/* </div> */}
                <ToastContainer position='bottom-right' limit={1}/>
                <ScrollToTop/>
                <div className="body-contact" style={{backgroundColor:'lightblue'}} onClick={()=>setOpen(false)}>
                    <div className='lottie-contact'>
                        <Lottie animationData={contact} loop={true} />
                    </div>
                    
                    <div className="right-body-contact">
                        <form className='mail' onSubmit={handleSubmit}>
                            <h1>Contact</h1>
                            <div>
                                <label htmlFor='email'>Email</label>
                                <input id='email' type='text' onChange={(e)=>setEmail(e.target.value)}></input>
                            </div>
                            <div>
                                <label htmlFor='subject'>Objet</label>
                                <input id='subject' type='text' onChange={(e)=>setSubject(e.target.value)}></input>
                            </div>
                            <div>
                                <label htmlFor='message'>Message</label>
                                <textarea id='message' type='text' onChange={(e)=>setMessage(e.target.value)}></textarea>
                            </div>
                            <div>
                                <label></label>
                                <button disabled={loading} type='submit'>
                                {loading ? 'Envoi...' : 'Envoyer'}
                                </button>
                            </div>
                            
                        </form>
                        <div className='others'>
                            <div className='linkedin' style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                                <BsLinkedin/> <p  style={{fontWeight:'bold', fontSize:'1rem', color:'black', textDecoration:'none'}} onClick={()=>window.open(`https://www.linkedin.com/in/clement-notin-bb4b0312b/`)}>  Linkedin</p>
                            </div>
                            <div style={{display:'flex', flexDirection:'row', alignItems:'center', marginBottom:'3rem'}}>
                                <BsFillTelephoneFill /> <p style={{fontWeight:'bold', fontSize:'1rem', color:'black'}}>  06.07.34.27.11</p>
                            </div>
                            
                            
                        </div>
                    </div>
                </div>
            </div>;
}

export default Contact;