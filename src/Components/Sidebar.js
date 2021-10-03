import ReactMarkdown from "react-markdown";
import DeleteIcon from 'material-icons/iconfont/material-icons.css';



function Sidebar({notes,onAddNote, onDeleteNote, activeNote, setActiveNote}){

        const sortedNotes = notes.sort((a,b) => b.lastModified - a.lastModified);

    return(
        <div className="app-sidebar">
            <div className="app-sidebar-header">
                <h1>Notes</h1>
                <span className="material-icons-outlined" onClick={onAddNote}>note_add</span>
            </div>
            <div className="app-sidebar-notes">

             {sortedNotes.map((note)=>(   
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