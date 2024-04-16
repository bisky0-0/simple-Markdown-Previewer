import { Editor } from "./editor"
import { Previewer } from "./previewer";
import editorReducer from "./reduxFunctions/reducers";
import { createStore } from "redux";
const store = createStore(editorReducer);


function App() {  

  return (
    <>
      <Editor />
      <Previewer />
    </>
  )
}

export default App
