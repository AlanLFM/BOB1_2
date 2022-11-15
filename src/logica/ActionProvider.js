import React from "react";
import DogPicture from "../logica/widget";
/*
puede que funcione
var linklog = document.createElement('login');
 var linkText = document.createTextNode("Click Aqui");
  linklog.appendChild(linkText); 
  linklog.title = "Click Aquí";
   linklog.href = "l0g1n.html"; document.body.appendChild(linklog);
   var a=linklog.link;
*/


const ActionProvider = ({ createChatBotMessage, setState, children }) => {
    const handleHello = () => {
        const botMessage = createChatBotMessage('holi, qué tal?');
        setState((prev) => ({ 
            ...prev, //Usa un spread operator, que permite que un iterable (como una function o un string) sea expandido
            messages: [...prev.messages, botMessage],
        }));
    };
    const login = () => {
        /*
import DogPicture from '../components/DogPicture/DogPicture.jsx"

const config = {
  initialMessages: [createChatBotMessage(`Hi! I'm ${botName}`)],
  widgets: [
    {
      widgetName: 'dogPicture',
      widgetFunc: (props) => <DogPicture {...props} />,
    },
  ],
};   */


    const link='Click aqui';
    const url="l0g1n.html";
    link.link(url);

        const botMessage =createChatBotMessage(`Pero por su pollo que si <a href="l0g1n.html">click aqui</a> ${link.link(url)}`) ;
        setState((prev) => ({ 
            ...prev, //Usa un spread operator, que permite que un iterable (como una function o un string) sea expandido
            messages: [...prev.messages, botMessage],

        }));
    };

    const handleDog = () => {
        const botMessage = createChatBotMessage(
          "Por favor, click abajo 👇", 
          {
            widget: 'dogPicture',
          }
        );
    
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage],
        }));
      };
    
      // Put the handleHello and handleDog function in the actions object to pass to the MessageParser
      return (
        <div>
          {React.Children.map(children, (child) => {
            return React.cloneElement(child, {
              actions: {
                handleHello,
                handleDog,
                login,
              },
            });
          })}
        </div>
      );
    };

    //Pone la funcion de handleHello en el objeto de acciones para pasar a MessageParser
   

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