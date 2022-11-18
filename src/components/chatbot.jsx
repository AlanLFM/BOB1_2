import Chatbot from "react-chatbot-kit"
import ActionProvider from "./logica/ActionProvider"
import Config from './logica/config';
import MessageParser from './logica/MessageParser';
import "./css/chatbot.css";

export default function BOB(){
    return (
      <div className="App">
        <header className="App-header">
          <Chatbot
            config={Config}
            actionProvider={ActionProvider}
            messageParser={MessageParser}
            headerText='BOB'
            //validator={ValidateInput}
          />
        </header>
      </div>
    )
  }