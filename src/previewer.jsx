import { useSelector } from "react-redux";
import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";

  
export function Previewer() {

    const text = useSelector(state => state.txt);    
    return (
        <div id="previewer-container">
        <h2 id="previewer-heading">Previewer</h2>
            <div id="previewer" dangerouslySetInnerHTML={{ __html: marked(text.text) }} />
      </div>
    )
}
