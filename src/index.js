import React    from 'react';
import ReactDOM from 'react-dom';
import App      from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
//redux 적용
import storedux   from './store';
import { Provider as ReduxProvider } from 'react-redux';
//react version 변경
//import ReactDOM from 'react-dom/client';
//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<AppRouter />);

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={storedux}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ReduxProvider>
  </React.StrictMode>,
document.getElementById("root")
);

// import reportWebVitals from "./reportWebVitals";
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

