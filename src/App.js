import './App.css';
import Sidebar from './Components/Sidebar';
import Main from './Components/Main';
import {useState} from 'react';
import uuid from "react-uuid";

function App() {
const [notes, setNotes] = useState([]);
const [activeNote, setActiveNote] = useState(false);

const onAddNote = () => {
  const newNote = {
    id: uuid(),
    title: "untitled note",
    body: " ",
    lastModified: Date.now() 
  };
  setNotes([newNote, ...notes]);
}
const onDeleteNote = (idToDelete) => {
  setNotes(notes.filter((note) => note.id !== idToDelete));
};

const onUpdateNote = (updatedNote) => {
    const updatedNotesArray = notes.map((note) => {
      if(note.id === activeNote) {
        return updatedNote;
      }
      return note;
    });
    setNotes(updatedNotesArray);
};

const getActiveNote = () =>{
  return  notes.find((note) => note.id === activeNote);
}

  return (
    <div className="App">
          <Sidebar 
          notes={notes} 
          onAddNote={onAddNote}
          onDeleteNote={onDeleteNote}
          activeNote={activeNote}
          setActiveNote={setActiveNote}/>
          <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote}/>
    </div>
  );
}

export default App;

