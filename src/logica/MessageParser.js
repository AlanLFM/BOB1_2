//MessageParser es la clase en la que vendrán los mensajes y respuestas de nuestro Bot

import React from "react";

const MessageParser = ({ children, actions }) => {
    // Verifica el mensaje que mandó el usuario y lo compara mediante muchos if
    const parse = (message) => {
        if (message.includes('holi')) {
            actions.handleHello();
        }
        else if(message.includes('L0G1N_09')){
            actions.handleDog();
        }
    };

    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    parse: parse,
                    actions: {},
                });
            })}
        </div>
    );
}

export default MessageParser;


/*
class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
    
    parse(message) {
      console.log(message)
    }
  }
  
  export default MessageParser;
*/