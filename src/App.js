import Home from "./containers/Home.js";
import Projet from "./containers/Projet.js";
import Contact from "./containers/Contact.js";
import NotFound from "./containers/NotFound.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { useState } from "react";
import './App.css';

function App() {
  const [open, setOpen] = useState(false);
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home open={open} setOpen={setOpen}/>}/>
            <Route path="/projets" element={<Projet open={open} setOpen={setOpen}/>}/>
            <Route path="/contact" element={<Contact open={open} setOpen={setOpen}/>}/>
            <Route path="/*" element={<NotFound />}/>
        </Routes>
      
    </Router>
    
  );
}

export default App;
