import React, { useState, useRef} from "react";
import Header from "../../components/Note/Header";
import Footer from "../../components/Footer/Footer";
import CreateArea from "../../components/Note/CreateArea";
import { useNavigate } from 'react-router-dom';

import './Note.css';

import NotesGrid from "../../components/Note/NotesGrid";


const NotesPage = () => {
    
    return (
        <div>
            <Header/>
            <Footer/>
        </div>
    );
}

export default NotesPage;