import ReactMarkdown from "react-markdown";
import DeleteIcon from 'material-icons/iconfont/material-icons.css';
import { useState } from "react";


function Sidebar({notes,onAddNote, onDeleteNote, activeNote, setActiveNote}){

    const [searchTerm, setSearchTerm] = useState("");

    const sortedNotes = notes.sort((a,b) => b.lastModified - a.lastModified);

    const filteredNotes = sortedNotes.filter((a) => {
                                if(searchTerm ==="")return a;
                                else if(a.title.toLowerCase().includes(searchTerm.toLowerCase())){
                                    return a
                                } });
                      
    return(
        <div className="app-sidebar">
            <div className="app-sidebar-header">
               <input className="searchBar" type="text" placeholder="Search..." onChange={(e) => {setSearchTerm(e.target.value)}}/>
            </div>
            <div className="app-sidebar-notes">

             {filteredNotes.map((note)=>(   
                  <div className={`app-sidebar-note  ${note.id===activeNote && "active"}`} onClick={()=> setActiveNote(note.id)}>
                    <div className="sidebar-note-title">
                        <strong>{note.title}</strong>
                        <span className="material-icons" onClick={()=> onDeleteNote(note.id)}>delete</span>
                    </div>
                    <ReactMarkdown>{note.body && note.body.substr(0,100) + "..."}</ReactMarkdown>
                    <small className="note-meta">Last modified {new Date(note.lastModified).toLocaleDateString("en-GB",{
                        hour: "2-digit",
                        minute: "2-digit"
                    })}</small>
                </div>	))}
                
            </div>
        </div>

    );
}

export default Sidebar;