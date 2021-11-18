import React, {useEffect, useContext, useState} from 'react'

import axios from "axios";
import Note from "../../components/Note/Note";

export default function NotesGrid(props) {
    
    const [alert, setAlert] = useState(false);

    const [notes, setNotes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    

    const deleteNote = async(noteId) => {
        
    } 



    useEffect(() => {
        if(alert) {
            setTimeout(() => {
            setAlert(false);
            }, 100)
        }
        }, [alert]);

    
    return (
        <div>
            {isLoading && <h3 style={{textAlign:"center", alignItems:"center"}}>Loading...</h3>}
            {!isLoading && notes.length === 0 && <h3 style={{textAlign:"center", alignItems:"center"}}>You don't have any notes!</h3>}
            {!isLoading && notes.map((noteItem, index) => {
                return (
                <Note
                    key={noteItem.noteId}
                    id={noteItem.noteId}
                    title={noteItem.title}
                    content={noteItem.content}
                    creationDate={noteItem.creationDate}
                    isFavourite={noteItem.isFavourite}
                    onDelete={deleteNote}
                    setAlert={setAlert}

                />
                );
            })}
        </div>
    )
}