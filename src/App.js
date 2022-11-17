import Chatbot from 'react-chatbot-kit';
import './App.css'; //CSS del Chatbot

//Importamos las clases necesarias para el funcionamiento del Bot
import ActionProvider from './logica/ActionProvider';
import Config from './logica/config';
import MessageParser from './logica/MessageParser';

import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';  
import Home from './logica/Home';
import About from './logica/About';
import Contact from './logica/Contact';
function App() {
  return (
    <div className="App">
    <header className="App-header">
          <Chatbot
            config={Config}
            actionProvider={ActionProvider}
            messageParser={MessageParser}
            headerText='BOB'
          />
        </header>
    </div>
  )
}

export default App;
