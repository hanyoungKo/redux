import React from 'react';
import ReactDOM  from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
/* redux*/
import { createStore, applyMiddleware } from 'redux';  
import rootReducer from './reducers';
/* react- redux */
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

/* 미들웨어 */
const loggerMiddleware = (store: any) => (next: any) =>(action: any) =>{
  console.log("store: ", store);
  console.log("action", action)
  next(action);
}

const middleware =  applyMiddleware(loggerMiddleware)  

/* store */
const store = createStore(rootReducer,middleware);

// 스토어 생성시 미들웨어를 등록시킴


const render = () => root.render(
  <React.StrictMode>
    <Provider store={store}>
      
    <App 
      value={store.getState()}
      onIncrement ={()=> store.dispatch({type: "INCREMENT"})}
      onDecrement = {()=> store.dispatch({type: "DECREMENT"})}
    />
    </Provider>

  </React.StrictMode>
);
render();

store.subscribe(render);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
