import './App.css';
import Sidebar from './Components/Sidebar';
import Main from './Components/Main';
import {useState} from 'react';
import uuid from "react-uuid";
import Toolbar from './Components/Toolbar';

function App() {
const [notes, setNotes] = useState([]);
const [activeNote, setActiveNote] = useState(false);
const [darkMode, setDarkMode] =useState(false);

const switchTheme = () => {
  setDarkMode(prevMode => !prevMode)
}

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

    <div className={darkMode ? "darkMode" : "lightMode"}>
        <div className="App">
              <Sidebar 
              notes={notes} 
              onAddNote={onAddNote}
              onDeleteNote={onDeleteNote}
              activeNote={activeNote}
              setActiveNote={setActiveNote}/>
              <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
              <Toolbar darkMode={darkMode} onAddNote={onAddNote} toggle={switchTheme}/>
        </div>
    </div>
  );
}

export default App;

