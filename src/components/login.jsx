import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "./login.css";

export default function Admin() {
  const [captchaValido, cambiarCaptchaValido]=useState(null);
  const [usuarioValido, cambiarUsuarioValido]=useState(false);
  

  const captcha=useRef(null);
  const submit=(e)=>{
    e.preventDefault();
    if(captcha.current.getValue()){
      console.log("Usuario no es un robot");
      cambiarUsuarioValido(true);
      cambiarCaptchaValido(true);
    }else{
      console.log('Acepta el captcha');
      cambiarUsuarioValido(false);
      cambiarCaptchaValido(false)
    }
  }
  
  const onChange=()=>{
    if(captcha.current.getValue()){
      console.log("Usuario no es un robot");
      cambiarCaptchaValido(true);
    }
  }
    return (
  <>
      <div id="sidebar">
      {!usuarioValido &&

        <div>
            <div className="form">
     <form onSubmit={submit}>
       <div className="input-container">
         <label>Username </label>
         <input type="text" name="uname" required />
       </div>
       <div className="input-container">
         <label>Password </label>
         <input type="password" name="pass" required />
       </div>
          <div className="recaptcha">

              <ReCAPTCHA
              ref={captcha}
              sitekey="6LdRXRcjAAAAAFH_mmv5AAkfHgRhvi1f_5Vy3KC5"
              onChange={onChange}
              />
          </div>
          {captchaValido==false &&<div className="error-captcha">Por favor acepta el captcha</div>}
       <div className="button-container">
         <input type="submit" />
       </div>
     </form>
   </div>
            
        </div>
          
}  
          {usuarioValido &&
          <div>
            <h1>Bienvenido </h1>
          <nav>
            <ul>
              <li>
                <a href={`contacts/1`}>Your Name</a>
              </li>
              <li>
                <a href={`contacts/2`}>Your Friend</a>
              </li>
            </ul>
          </nav>
          </div>
          }
        
        <div id="detail"></div>
    </div>
</>
    );
  }