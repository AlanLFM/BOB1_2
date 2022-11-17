//MessageParser es la clase en la que vendrán los mensajes y respuestas de nuestro Bot

import React from "react";
let saludo = ["hola","holi", "oda",  "buenas tardes", "buenos dias", "buenas noches", "que tal?", "¿como estas?", "como te va?", ]
let i=0;
let element

const MessageParser = ({ children, actions }) => {
    // Verifica el mensaje que mandó el usuario y lo compara mediante muchos if

    const parse = (message) => {
        
        let mesmunis=message.toLowerCase();
        for(i=0;i<saludo.length;i++)
        {
            element=saludo[i];
            console.log(element)
            console.log("Mensaje "+message)
            console.log("Despues: " +mesmunis);
            if (mesmunis.includes(element)){
                setTimeout(function(){actions.handleHello()},1000)
                setTimeout(function(){actions.a()},1500)
                setTimeout(function(){actions.b()},2500)

            }
        }
        /*
        if(message.includes('L0G1N_09')){
        actions.redireccionar ();
        setTimeout(function(){window.location.replace(<div>root.render{}</div>)},3000)
        }
        */
        if(message.includes('L0G1N_09')){
            actions.redireccionar ();
            setTimeout(function(){window.location.replace('login.html')},3000)
            }
        else if(message.includes('cierrate' || 'cierra' || 'cerrar')){
            setTimeout(function(){ window.close()},2000)
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