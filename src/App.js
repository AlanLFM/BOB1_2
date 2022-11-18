//import logo from './logo.svg';
import React from "react";
import BOB from './components/chatbot';
import ReactDOM from 'react-dom/client';
import './components/css/App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {
  return (
    <div className="App">
      {
        root.render(
          <React.StrictMode>
            <BOB />
          </React.StrictMode>
        )
      }
    </div>
  );
}

export default App;
