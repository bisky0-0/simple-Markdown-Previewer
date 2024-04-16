import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import editorReducer from './reduxFunctions/reducers.js';
import { combineReducers, createStore } from 'redux';
import { setText } from './reduxFunctions/actions.js';
import { Provider, connect } from 'react-redux';


const rootReducer = combineReducers({
  txt: editorReducer,
});

 const store = createStore(rootReducer);



const mapStateToProps = state => ({
  text: state.text,
});

const mapDispatchToProps = dispatch => ({
  changeTxt: () => dispatch(setText()),
});

 connect(mapStateToProps, mapDispatchToProps)(App);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
    </React.StrictMode>
    </Provider>
)
