

function Toolbar({darkMode,onAddNote, toggle}){
const  downloadFile = () => {
    const element = document.createElement("a");
    const file = new Blob([document.getElementById('body').value],    
               {type: 'text/markdown'});
    const title = document.getElementById('title').value;
    element.href = URL.createObjectURL(file);
    element.download = title.toString();
    document.body.appendChild(element);
    element.click();
 }



    return <div className="toolbar">
            <span className="material-icons-outlined" onClick={toggle}>{darkMode ? "toggle_on" : "toggle_off"}</span>
            <span className="material-icons-outlined" onClick={onAddNote}>note_add</span>
             <span className="material-icons-outlined" onClick={downloadFile}>file_download</span>

    </div>

}  
export default Toolbar;