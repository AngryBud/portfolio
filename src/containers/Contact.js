import Header from '../components/Header';
import Lottie from "lottie-react";
// import space1 from "../assets/spaceman-contact.json";
import contact from "../assets/lottie-contact.json";
import { BsLinkedin } from "react-icons/bs";
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
            const {data} = await axios.post(`http://localhost:4000/api/email`,{
                email,
                subject,
                message,
            })
            setLoading(false);
            toast.success(data.message);
        }catch(error){
            setLoading(false);
            toast.error("error"
                // error.response && error.response.data.message
                // ? error.response.data.message
                // : error.message
            )
        }
    }
    return  <div>
                <div>
                    <Header open={open} setOpen={setOpen}/>
                </div>
                <ToastContainer position='bottom-right' limit={1}/>
                <div className="body-contact" style={{backgroundColor:'lightblue'}}>
                    <Lottie animationData={contact} loop={true} style={{color:'lightblue', flex:'1'}}/>
                    <div className="right-body-contact">
                        <form className='mail' onSubmit={handleSubmit}>
                            <h1>Contact</h1>
                            <div>
                                <label htmlFor='email'>Email</label>
                                <input id='email' type='text' onChange={(e)=>setEmail(e.target.value)}></input>
                            </div>
                            <div>
                                <label htmlFor='subject'>Subject</label>
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
                            
                            <BsLinkedin/>
                        </div>
                    </div>
                </div>
            </div>;
}

export default Contact;