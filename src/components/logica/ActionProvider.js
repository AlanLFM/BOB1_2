import React from "react";
const ActionProvider = ({ createChatBotMessage, setState, children }) => {
    const handleHello = () => {
        const botMessage = createChatBotMessage('Holi, ¿qué tal?');

        setState((prev) => ({ 
            ...prev, //Usa un spread operator, que permite que un iterable (como una function o un string) sea expandido
            messages: [...prev.messages, botMessage],
        }));
    };
    const a = () => {
        const botMessage = createChatBotMessage('Soy BOB, un asistente que te informará sobre los trámites escolares');
        setState((prev) => ({ 
            ...prev, //Usa un spread operator, que permite que un iterable (como una function o un string) sea expandido
            messages: [...prev.messages, botMessage],
        }));
    };
    const b = () => {
      const botMessage = createChatBotMessage('Toma mi lista *le da la lista*');
      setState((prev) => ({ 
          ...prev, //Usa un spread operator, que permite que un iterable (como una function o un string) sea expandido
          messages: [...prev.messages, botMessage],
      }));
  };
  const t = () => {
    
    const botMessage = createChatBotMessage('¿Necesitas algo más?');
    setState((prev) => ({ 
        ...prev, //Usa un spread operator, que permite que un iterable (como una function o un string) sea expandido
        messages: [...prev.messages, botMessage],
    }));
};
const t2 = () => {
    
    const botMessage = createChatBotMessage('¿Hola?');
    setState((prev) => ({ 
        ...prev, //Usa un spread operator, que permite que un iterable (como una function o un string) sea expandido
        messages: [...prev.messages, botMessage],
    }));
};
const t3 = () => {
    
    const botMessage = createChatBotMessage('¿Aunque sea puedes cerrar la página?');
    setState((prev) => ({ 
        ...prev, //Usa un spread operator, que permite que un iterable (como una function o un string) sea expandido
        messages: [...prev.messages, botMessage],
    }));
};
const t4 = () => {
    
    const botMessage = createChatBotMessage('Por favor 🥺');
    setState((prev) => ({ 
        ...prev, //Usa un spread operator, que permite que un iterable (como una function o un string) sea expandido
        messages: [...prev.messages, botMessage],
    }));
};

    const redireccionar  = () => {
        const botMessage = createChatBotMessage('Te mandaré a la página de los admins, suerte! ');
        setState((prev) => ({ 
            ...prev, //Usa un spread operator, que permite que un iterable (como una function o un string) sea expandido
            messages: [...prev.messages, botMessage],
        }));
      };

    /*
    const handleDefault = () => {
        const botMessage = createChatBotMessage('Lo siento, no entendí lo que quisite decir');

        setState((prev) => ({ 
            ...prev, //Usa un spread operator, que permite que un iterable (como una function o un string) sea expandido
            messages: [...prev.messages, botMessage],
        }));
    };
    */
   
    //Pone la funcion de handleHello en el objeto de acciones para pasar a MessageParser
    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    actions: {
                        handleHello,
                        redireccionar,
                        a,b,t,t2,t3,t4,
                        
                    },
                });
            })}
        </div>
    );
    
}

export default ActionProvider;

/*
class ActionProvider {
    constructor(
     createChatBotMessage,
     setStateFunc,
     createClientMessage,
     stateRef,
     createCustomMessage,
     ...rest
   ) {
     this.createChatBotMessage = createChatBotMessage;
     this.setState = setStateFunc;
     this.createClientMessage = createClientMessage;
     this.stateRef = stateRef;
     this.createCustomMessage = createCustomMessage;
   }
 }
 
 export default ActionProvider
 */