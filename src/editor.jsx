import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setText } from './reduxFunctions/actions'; 

export function Editor() {
    const text = useSelector(state => state.txt);
    const dispatch = useDispatch();

    const handleChange = (e) => {
    dispatch(setText(e.target.value));
  };
    return (
        <div id="editor-container">
            <h2 id="editor-heading">Editor</h2>
            <textarea id="editor"  onChange={handleChange}>
                
            </textarea>
        </div>
    )
}
