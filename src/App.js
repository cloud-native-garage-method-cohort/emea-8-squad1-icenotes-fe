import React from "react";
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';

import Notes from "./pages/Notes/NotesPage";


import './App.css';
export default function App() {
  return (
    <div>
      
               <Notes/> 

    </div>
  );
}