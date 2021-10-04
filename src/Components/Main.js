import ReactMarkdown from 'react-markdown'

function Main({activeNote, onUpdateNote}) {

    const onEditField = (key, value) => {
        onUpdateNote({
            ...activeNote,
            [key] : value,
            lastModified: Date.now()
        })
    };

    if(!activeNote){
        return <div className="no-active-note">No note selected</div>
    }

const  downloadFile = () => {
   const element = document.createElement("a");
   const file = new Blob([document.getElementById('body').value],    
               {type: 'text/markdown'});
   element.href = URL.createObjectURL(file);
   element.download = {activeNote};
   document.body.appendChild(element);
   element.click();
 }

    return (
            <div className="app-main">
                <div className="app-main-note-edit">
                    <div className="topBar">
                    <input type="text" id="title" placeholder="Enter Title" value={activeNote.title} onChange={(e) => onEditField("title",e.target.value)} autoFocus />
                        <button>Switch</button>
                    </div>
                    <textarea name="" id="body" cols="30" rows="10" placeholder="Text here" value={activeNote.body}
                    onChange={(e) => onEditField("body",e.target.value)}
                    ></textarea>
                    <button onClick={downloadFile}>Download</button>
                </div>
                <div className="app-main-note-preview">
                    <h1 className="preview-title">{activeNote.title}</h1>
                   <ReactMarkdown className="markdown-preview" id="title">
                            {activeNote.body}
                   </ReactMarkdown> 
                </div>
            </div>
         
         );
}

export default Main;