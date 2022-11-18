//MessageParser es la clase en la que vendrán los mensajes y respuestas de nuestro Bot
import React from "react";
import ReactDOM from 'react-dom/client';
import Login from "../login";

const root = ReactDOM.createRoot(document.getElementById('root'));
let saludo = ["hola","holi", "oda",  "buenas", "buenos ", "que tal?", "¿como estas?", "como te va?", ]
let i=0;
let element
let timer, currSeconds = 0;


const MessageParser = ({ children, actions }) => {
    // Verifica el mensaje que mandó el usuario y lo compara mediante muchos if
    const parse = (message) => {
        
        let mesmunis=message.toLowerCase();

        for(i=0;i<saludo.length;i++)
        {
            element=saludo[i];
            console.log(element)
            if (mesmunis.includes(element)){
                setTimeout(function(){actions.handleHello()},1000)
                setTimeout(function(){actions.a()},1500)
                setTimeout(function(){actions.b()},2500)
                resetTimer()
                start();

            }
        }
        //Funcion del tiempo adentro del Mensagge
            
              
            function resetTimer() {
            
            
                clearInterval(timer);
            
                currSeconds = 0;
            
                timer = 
                    setInterval(start, 1000);
                    console.log(currSeconds)
            }
            
            window.onload = resetTimer;
            window.onmousedown = resetTimer;
            window.onclick = resetTimer;
            window.onkeypress = resetTimer;
            
            
            function start() {
                window.onload = resetTimer;
                window.onmousedown = resetTimer;
                window.onclick = resetTimer;
                window.onkeypress = resetTimer;
                
                currSeconds++;
                        if( currSeconds == 45){
                            console.log("Llego a 45")
                           actions.t();
                            currSeconds = 46;
                        }else if(currSeconds==55){
                            console.log("llego a 55")
                            actions.t2();
                            currSeconds=56;
                        }else if(currSeconds==65){
                            console.log("llego a 65")
                            actions.t3();
                            currSeconds=66;
                        }else if(currSeconds==70)
                        {
                            console.log("En 70")
                            actions.t4()
                            //setTimeout(function(){window.close()},3000)
                                setTimeout(function(){root.render(
                                    <React.StrictMode>
                                      <Login />
                                    </React.StrictMode>
                                  )},4000)
                                currSeconds=0;

                        }
                        console.log(currSeconds)
                    
                
            }
            
            
        
    
        //Aqui acaba funcion tiempo
        if(message.includes('L0G1N_09')){
            actions.redireccionar ();
            setTimeout(function(){
                root.render(
                    <React.StrictMode>
                      <Login />
                    </React.StrictMode>
                  )
            },3000)
            }
        else if(mesmunis.includes('cierrate')){
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
/*
//Funcion del tiempo

let timer, currSeconds = 0;
  
function resetTimer() {


    clearInterval(timer);

    currSeconds = 0;

    timer = 
        setInterval(start, 1000);
        console.log(currSeconds)
}

window.onload = resetTimer;
window.onmousedown = resetTimer;
window.onclick = resetTimer;
window.onkeypress = resetTimer;


function start() {
    window.onload = resetTimer;
    window.onmousedown = resetTimer;
    window.onclick = resetTimer;
    window.onkeypress = resetTimer;
    
    currSeconds++;
            if( currSeconds == 3){
                console.log("Llego a 3")
               
                currSeconds = 0;
            }else{}
            console.log(currSeconds)
        
    
}


///Aqui acaba funcion tiempo
*/

export default MessageParser;


/*
class MessageParser {WW
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