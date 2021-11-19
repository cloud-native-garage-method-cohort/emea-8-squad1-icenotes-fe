import React from "react";
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';

import NotesApp from "./pages/Notes/NotesPage";

import './App.css';
export default function App() {
  return (
    <div>
      <NotesApp/> 
    </div>
  );
}